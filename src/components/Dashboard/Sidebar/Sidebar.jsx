import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill, BsGraphUp } from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import MenuItem from './Menu/MenuItem'
import HostMenu from './Menu/HostMenu'
import useRole from '../../../hooks/useRole'
import RenderMenu from './Menu/RenderMenu'
import AdminMenu from './Menu/AdminMenu'

const Sidebar = () => {
    const { logOut } = useAuth()
    const[role,loading] = useRole()
    const [isOpen, setIsOpen] = useState(false)

    // Toggle sidebar visibility on small screens
    const handleToggle = () => setIsOpen(!isOpen)

    // Close sidebar when link clicked (mobile)
    const handleClose = () => setIsOpen(false)

    return (
        <>
            {/* ✅ Small Screen Top Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between items-center md:hidden shadow-sm'>
                <Link to='/' className='p-4 hidden font-bold text-green-600 text-lg'>
                    RentWheels_BD
                </Link>
                <button
                    onClick={handleToggle}
                    className='p-4 focus:outline-none hover:bg-gray-200 rounded-md'
                    aria-label='Toggle sidebar'
                >
                    <AiOutlineBars className='h-6 w-6' />
                </button>
            </div>

            {/* ✅ Sidebar */}
            <div
                className={`z-20 fixed flex flex-col justify-between bg-gray-100 w-64 space-y-6 px-2 py-4 inset-y-0 left-0 transform 
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg`}
            >
                <div>
                    {/* Logo */}
                    <div className='hidden md:flex justify-center items-center px-4 py-2 shadow rounded-lg bg-green-50'>
                        <Link to='/'>
                            <p className='text-2xl text-green-600 font-bold'>
                                RentWheels_BD
                            </p>
                        </Link>
                    </div>

                    {/* Nav Items */}
                    <nav className='flex flex-col mt-6'>
                        <MenuItem
                            label='Statistics'
                            address='/dashboard'
                            icon={BsGraphUp}
                            onClick={handleClose}
                        />

                        {/* Render Menu Items */}
                        {
                            role === 'render' && <RenderMenu/>
                        }
                        {/* Host Menu Items */}
                        {
                            role === 'host' && <HostMenu />
                        }
                        {/* Admin Menu Items */}
                        {
                            role === 'admin' && <AdminMenu/>
                        }
                    </nav>
                </div>

                {/* Bottom Section */}
                <div>
                    <hr className='mb-2' />

                    <MenuItem
                        label='Profile'
                        address='/dashboard/profile'
                        icon={FcSettings}
                        onClick={handleClose}
                    />

                    <button
                        onClick={() => {
                            logOut()
                            handleClose()
                        }}
                        className='flex items-center w-full px-4 py-2 mt-4 text-gray-700 hover:bg-gray-300 hover:text-gray-800 rounded-md transition-colors'
                    >
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>

            {/* ✅ Background overlay when sidebar open on mobile */}
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden'
                    onClick={handleClose}
                />
            )}
        </>
    )
}

export default Sidebar
