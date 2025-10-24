// Navbar Page
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
    const { user, logOut } = useAuth();
    // const [isOpen, setIsOpen] = useState(false)

    console.log(user)

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/allArtCraftItems'>All Art & craft Items</NavLink></li>
        <li><NavLink to='/addCraftItem'>Add Craft Item</NavLink></li>

        <li><NavLink to='/myArtCraftList'>My Art&Craft List</NavLink></li> */}



    </>
    return (
        <div className="navbar  mt-[50px] max-w-[1280px] mx-auto z-50 relative">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}

                    </ul>
                </div>

                <div className="flex items-center">
                    <img className="w-[40px] h-[40px]" src="https://m.media-amazon.com/images/I/71cAl0LbHgL._AC_SL1500_.jpg" alt="" />
                    <a className="btn btn-ghost lg:text-[23px] text-[12px] font-extrabold "><span className=" text-[#404040]  ">RentWheels</span><span className="text-green-700"> _BD</span>  </a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex z-10">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end bg-green-200 border-2 rounded-full">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full">

                                <img
                                    className='rounded-full'
                                    referrerPolicy='no-referrer'
                                    src={user && user.photoURL ? user.photoURL : {}}
                                    alt='profile'
                                    height='30'
                                    width='30'
                                />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between bg-black text-white">
                                    {user.displayName}

                                </a>
                            </li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>

                            <div onClick={logOut}>
                                <li><a>SigOut</a></li>
                            </div>
                        </ul>
                    </div> : <li><NavLink to='/logIn'>LogIn</NavLink></li>

                }
            </div>
        </div>
    );
};


export default Navbar;



// import { AiOutlineMenu } from 'react-icons/ai'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// // import avatarImg from '../../../assets/images/placeholder.jpg'
// import useAuth from '../hooks/useAuth'

// const Navbar = () => {
//     const { user, logOut } = useAuth()
//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <div className='fixed w-full bg-white z-10 shadow-sm'>
//             <div className='py-4 border-b-[1px]'>
//                 <div>
//                     <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
//                         {/* Logo */}
//                         <Link to='/'>
//                             <img
//                                 // className='hidden md:block'
//                                 src='https://i.ibb.co/4ZXzmq5/logo.png'
//                                 alt='logo'
//                                 width='100'
//                                 height='100'
//                             />
//                         </Link>
//                         {/* Dropdown Menu */}
//                         <div className='relative'>
//                             <div className='flex flex-row items-center gap-3'>
//                                 {/* Become A Host btn */}
//                                 <div className='hidden md:block'>
//                                     {!user && (
//                                         <button
//                                             disabled={!user}
//                                             className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
//                                         >
//                                             Host your home
//                                         </button>
//                                     )}
//                                 </div>
//                                 {/* Dropdown btn */}
//                                 <div
//                                     onClick={() => setIsOpen(!isOpen)}
//                                     className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
//                                 >
//                                     <AiOutlineMenu />
//                                     <div className='hidden md:block'>
//                                         {/* Avatar */}
// <img
//     className='rounded-full'
//     referrerPolicy='no-referrer'
//     src={user && user.photoURL ? user.photoURL : {}}
//     alt='profile'
//     height='30'
//     width='30'
// />
//                                     </div>
//                                 </div>
//                             </div>
//                             {isOpen && (
//                                 <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
//                                     <div className='flex flex-col cursor-pointer'>
//                                         <Link
//                                             to='/'
//                                             className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//                                         >
//                                             Home
//                                         </Link>

//                                         {user ? (
//                                             <>
//                                                 <div
//                                                     onClick={logOut}
//                                                     className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
//                                                 >
//                                                     Logout
//                                                 </div>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Link
//                                                     to='/login'
//                                                     className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//                                                 >
//                                                     Login
//                                                 </Link>
//                                                 <Link
//                                                     to='/signup'
//                                                     className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//                                                 >
//                                                     Sign Up
//                                                 </Link>
//                                             </>
//                                         )}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar















//////////////////



// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {

//     const navLinks = <>
//         <li><NavLink to='/'>Home</NavLink></li>
//         {/* <li><NavLink to='/statistics'>Statistics</NavLink></li>
//         <li><NavLink to='/appliedJobs'>Applied Jobs</NavLink></li>
//         <li><NavLink to='/blogs'>Blogs</NavLink></li> */}
//     </>
//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {navLinks}
//                     </ul>
//                 </div>
//                 <Link to='/'>
//                     <button>
//                         <p
//                             className="
//                             font-extrabold 
//                             text-green-500
//                             text-[24px]
//                             hover:text-[#22c55e]
//                             hover:text-[30px]
//                             hover:
//                             ">
//                             RentWheels-BD
//                         </p>
//                     </button>
//                 </Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal  px-1">
//                     {navLinks}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn text-green-500 font-extrabold">Get Started</a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;