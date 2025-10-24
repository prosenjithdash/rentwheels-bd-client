// It's Register page.

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from 'react-toastify';
const Register = () => {
    const { createUser,updateUserProfile,loading } = useAuth()
    const navigate = useNavigate();

    const handleRegister = async (e) => {

        
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Name:',name,'Photo:',photo, 'Email: ', email, 'Password: ', password)

        try
        {
            // 1. user registration
            const result = await createUser(email, password)
            console.log(result)

            // 2. update profile
            await updateUserProfile(name, photo)
            
            toast.success('Registration Successful.')
            e.target.reset() 
            navigate('/')
        }
        catch (error) {
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
                Please Register</h2>

            <form onSubmit={handleRegister} >
                <div className=" w-[500px] mx-auto">
                    <input type="name" placeholder='enter name' name="name" id="" required className='border-2 w-full border-black rounded-lg mb-2 p-2 mx-auto' />
                    <br />
                    <input type="text" placeholder='enter image link' name="photo" id="" required className='border-2 w-full border-black rounded-lg mb-2 p-2 mx-auto' />
                    <br />
                    <input type="email" placeholder='enter email' name="email" id="" required className='border-2 w-full border-black rounded-lg mb-2 p-2 mx-auto' />
                    <br />
                    <input type="password" placeholder='enter password' name="password" required id="" className='border-2 rounded-lg border-black mb-2 p-2 w-full' />
                    <br />
                    <br />
                    
                </div>
                {/* <input type="submit" value="Register" className='border-2 bg-green-400 text-white font-bold border-black p-2 rounded-lg w-full mb-4' /> */}

                <div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="border-2 bg-green-400 text-white font-bold border-black p-2 rounded-lg w-full mb-4"
                    >
                        {loading ? 'Loading...' : 'Register'}

                    </button>
                </div>
            </form>
        </div>

    );
};

export default Register;