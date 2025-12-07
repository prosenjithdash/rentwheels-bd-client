
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import './CheckoutForm.css';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({ closeModal, bookingInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const [clientSecret, setClientSecret] = useState()
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState('')

    useEffect(() => {
        //fetch client secret
        if (bookingInfo?.price > 1) {
            getClientSecret({price : bookingInfo?.price})
        }

    }, [])
    
    // get clientSecret
    const getClientSecret = async price => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, price)
        console.log("clientSecret from server ---> ",data)
        setClientSecret(data.clientSecret)
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        setProcessing(true)
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
            setProcessing(false)
            return
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        // CONFIRM PAYMENT
        const { error: confirmError, paymentIntent } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                }
            })
        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }

        if (paymentIntent.status === 'succeeded') {
            // 1. Create payment info object
            // 2. Save payment info in booking collection (db)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                        disabled={!stripe || !clientSecret || processing}
                        onClick={closeModal}
                        type='submit'
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
                    >
                        <CheckCircle size={18} />
                        Pay {bookingInfo?.price} /=
                    </button>
                    <button
                        onClick={closeModal}
                        className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </form>

            {cardError && <p  className='text-red-600 ml-8'>{cardError}</p>}
        </>
       
    );
};


export default CheckoutForm


