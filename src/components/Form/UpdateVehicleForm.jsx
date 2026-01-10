import { categories } from '../Categories/CategoriesData'
import { DateRange } from "react-date-range";

const UpdateVehicleForm = (
    {   handleSubmit,
        dates,
        handleDates,
        vehicleData,
        setVehicleData,
        loading
    }) => {

      
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-10'>

                    {/* Location */}
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='location' className='block text-gray-600'>
                            Location
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='location'
                            id='location'
                            type='text'
                            value={vehicleData?.location}
                            onChange={(e)=>setVehicleData({...vehicleData, location: e.target.value})}
                            placeholder='Location'
                            required
                        />
                    </div>

                    {/* Title */}
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Title
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='title'
                            id='title'
                            type='text'
                            value={vehicleData?.title}
                            onChange={(e) => setVehicleData({ ...vehicleData, title: e.target.value })}
                            placeholder='Title'
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Image URL
                        </label>
                        <input
                            name="imageURL"
                            type="text"
                            value={vehicleData?.imageURL}
                            onChange={(e) => setVehicleData({ ...vehicleData, imageURL: e.target.value })}
                            placeholder="https://your-image-host.com/image.jpg"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                    </div>

                    {/* Calender */}
                    <div className='space-y-1'>
                        <label htmlFor='location' className='block text-gray-600'>
                            Select Availability Range
                        </label>
                        <div className='flex justify-center pt-2'>{/* Calender */}
                            <DateRange
                                                        rangeColors={['#16A34A']}
                                                        editableDateInputs={true}
                                                        onChange={item => handleDates(item)}
                                                        moveRangeOnFirstSelection={false}
                                                        ranges={[dates]}
                                                    />
                        </div>
                    </div>

                    {/* Image with image server */}
                    {/* <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                                <label>
                                    <input
                                        className='text-sm cursor-pointer w-36 hidden'
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                        Upload Image
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div> */}

                    <div className='flex justify-between gap-2'>

                        {/* {Category} */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='category' className=' text-write-600'>
                                Category
                            </label>
                            <select
                                required
                                value={vehicleData?.category}
                                onChange={(e) => setVehicleData({ ...vehicleData, category: e.target.value })}
                                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                name='category'
                            >
                                {categories.map(category => (
                                    <option value={category.name} key={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Price
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='price'
                                id='price'
                                type='number'
                                value={vehicleData?.price}
                                onChange={(e) => setVehicleData({ ...vehicleData, price: e.target.value })}
                                placeholder='Price'
                                required
                            />
                        </div>

                    </div>

                    {/* Type */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Type
                        </label>
                        <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="type"
                                    // value="Automatic"
                                    value={vehicleData?.type}
                                    onChange={(e) => setVehicleData({ ...vehicleData, type: e.target.value })}
                                />
                                <span>Automatic</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="type"
                                    // value="Manual"
                                    value={vehicleData?.type}
                                    onChange={(e) => setVehicleData({ ...vehicleData, type: e.target.value })}
                                />
                                <span>Manual</span>
                            </label>
                        </div>
                    </div>

                    <div className='flex justify-between gap-2'>

                        {/* Engine CC */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Engine CC
                            </label>
                            <input
                                name="engineCC"
                                type="text"
                                value={vehicleData?.engineCC}
                                onChange={(e) => setVehicleData({ ...vehicleData, engineCC: e.target.value })}
                                placeholder="1500"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        {/* Mileage */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Mileage (km/l)
                            </label>
                            <input
                                name="mileage"
                                type="text"
                                value={vehicleData?.mileage}
                                onChange={(e) => setVehicleData({ ...vehicleData, mileage: e.target.value })}
                                placeholder="20 km/l"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Description
                        </label>

                        <textarea
                            id='description'
                            value={vehicleData?.description}
                            onChange={(e) => setVehicleData({ ...vehicleData, description: e.target.value })}
                            className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                            name='description'
                        ></textarea>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateVehicleForm