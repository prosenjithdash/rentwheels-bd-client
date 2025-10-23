// It's a Login Page.

const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Name', name, 'Email: ', email, 'Password: ', password)

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
                <input type="submit" value="Register" className='border-2 bg-green-400 text-white font-bold border-black p-2 rounded-lg w-full mb-4' />
            </form>
        </div>

    );
};

export default Login;