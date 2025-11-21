import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const HostMenu = () => {
    return (
        <>
            <MenuItem icon={BsFillHouseAddFill} label='Add Vehicle' address='add_vehicle' />
            <MenuItem icon={MdHomeWork} label='My Listings' address='my_listings' />
            <MenuItem
                icon={MdOutlineManageHistory}
                label='Manage Bookings'

                address='manage_bookings'
            />
        </>
        


    )
}

export default HostMenu