// It's a Login Page.

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from 'react-toastify';

const Login = () => {

    const { signIn,loading,setLoading, signInWithGoogle } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'


      // handle Google Signin
        const handleGoogleSignIn = async () => {
            try {
    
                await signInWithGoogle()
    
                toast.success('Login Successful.')
               
                navigate(from)
            }
            catch (error) {
                // console.log(error.message)
                toast.error(error.message)
            }
        }


    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email: ', email, 'Password: ', password)

        try {
            setLoading(true)
            await signIn(email, password)
        
            toast.success('Login Successful')
             navigate(from)
            
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
            
        }

    }
    return (
        <div
            className='bg-green-100  rounded-xl border-black-700 p-3 m-3 w-2/4 mx-auto mt-[250px]'>
            <h2
                className="text-2xl text-center font-extrabold m-4"
            >
                Please Login</h2>

            <form onSubmit={handleLogin} >
                <div className=" w-[500px] mx-auto">
                    
                    <input type="email" placeholder='enter email' name="email" id="" required className='border-2 w-full border-black rounded-lg mb-2 p-2 mx-auto' />
                    <br />
                    <input type="password" placeholder='enter password' name="password" required id="" className='border-2 rounded-lg border-black mb-2 p-2 w-full' />
                    <br />
                    <br />

                </div>
                <input type="submit" value="Login" className='border-2 bg-green-400 text-white font-bold border-black p-2 rounded-lg w-full mb-4' />
                {/* <button
                    disabled={loading}
                    type="submit"
                    className='border-2 bg-green-400 text-white font-bold border-black p-2 rounded-lg w-full mb-4'
                >
                    {
                        loading ? (<p className="animate-spin m-auto">Loading...</p>) : (
                            Login
                        )
                    }
                </button> */}
            </form>
            <hr />
            <div>
                <button
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="disabled:cursor-not-allowed cursor-pointer border-2  font-extrabold border-green-400 p-2 rounded-full w-full mb-4"
                >
                    Continue With Google

                </button>
            </div>
            <div>
                <p className="text-xs text-center sm:px-6 text-gray-600 dark:text-gray-600">Do not have an account?
                    <Link to='/register' className="underline text-green-600 font-extrabold "> Registration</Link>
                </p>
            </div>
        </div>

    );
};

export default Login;