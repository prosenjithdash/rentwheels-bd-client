import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment, useState } from 'react'
import UpdateVehicleForm from '../../Form/UpdateVehicleForm'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { toast } from 'react-toastify'

const UpdateVehicleModal = ({ setIsUpdateModalOpen, isOpen, vehicle, refetch }) => {
    const axiosSecure = useAxiosSecure()

    const [loading, setLoading] = useState(false)
    const[vehicleData, setVehicleData] = useState(vehicle)
    
    const [dates, setDates] = useState({
        startDate: new Date(vehicle?.from),
        endDate: new Date(vehicle?.to),
        key: "selection",
    })

    // handle image update


    // Date range handler
    const handleDates = item => {
        console.log(item.selection.startDate)
        setDates(item.selection)

    }
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const updatedVehicleData = Object.assign({}, vehicleData)
        delete updatedVehicleData._id 
        console.log(updatedVehicleData)
        try {
            const { data } = await axiosSecure.put(`/vehicle/update/${vehicle?._id}`, updatedVehicleData)
            console.log(data)
            await refetch()
            setLoading(false)
            toast.success('Vehicle Update successfully done.')

        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(error.message)

        }
    }

   

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsUpdateModalOpen(false)}
            >
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Update Vehicle Info
                                </DialogTitle>
                                <div className='mt-2 w-full'>
                                    {/* Update Vehicle form */}
                                    <UpdateVehicleForm
                                        handleSubmit={handleSubmit}
                                        dates={dates}
                                        handleDates={handleDates}
                                        vehicleData={vehicleData}
                                        setVehicleData={setVehicleData}
                                        loading={loading}
                                    />
                                </div>
                                <hr className='mt-8 ' />
                                <div className='mt-2 '>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                        onClick={() => setIsUpdateModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}


export default UpdateVehicleModal