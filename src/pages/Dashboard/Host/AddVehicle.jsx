import React, { useState } from "react";
import { categories } from "../../../components/Categories/CategoriesData";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {

    const navigate = useNavigate()
    const { user,loading } = useAuth();

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    })

    // Date range handler
    const handleDates = item => {
        console.log(item.selection.startDate)
        setDates(item.selection)
        
    }

    const { mutateAsync} = useMutation({
        mutationFn: async (vehicleData) => {
            const { data } = await axios.post('http://localhost:8000/vehicle', vehicleData);
            return data;
        },
        onSuccess: () => {
            console.log('Data Saved Successfully')
            toast.success('Vehicle added successfully!');
            navigate('/dashboard/my_listings');
        }
    });



    
    // Form handler
    const handleSubmit = async (e) => {
        e.preventDefault()

        const title = e.target.vehicleTitle.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const imageURL = e.target.imageURL.value;
        const price = e.target.price.value;
        const type = e.target.type.value;
        const engineCC = e.target.engineCC.value;
        const mileage = e.target.mileage.value;
        const seats = e.target.seats.value;
        const fuelType = e.target.fuelType.value;
        
        const description = e.target.description.value;
        const to = dates.endDate
        const from = dates.startDate
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email

        }

        try {
            const vehicleData = {
                title,
                category,
                location,
                imageURL,
                price,
                type,
                engineCC,
                mileage,
                seats,
                fuelType,
                description,
                to,
                from,
                host
            }
            console.table(vehicleData)
            
            // console.log(vehicleData)

            // Post request to server
            await mutateAsync(vehicleData)


        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
     
    };

    return (
        <section className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Add a New Vehicle</h2>
            <p className="text-gray-500 mb-6">
                Please fill out the form below to list your vehicle on the platform.
            </p>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* LEFT SIDE FORM (2 columns wide) */}
                <div className="lg:col-span-2 space-y-5">
                    {/* Vehicle Title */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Vehicle Title
                        </label>
                        <input
                            name="vehicleTitle"
                            type="text"
                            placeholder="e.g., Toyota Axio 2018 - Excellent Condition"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                    </div>

                    {/* Category & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Category
                            </label>
                            <select
                                name="category"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            >
                                <option value="">Select a category</option>
                                {categories.map((item, index) => (
                                    <option key={index} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Location
                            </label>
                            
                            <input
                                name="location"
                                type="text"
                                placeholder="e.g., Sreemangal Town Center"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Image URL
                        </label>
                        <input
                            name="imageURL"
                            type="text"
                            placeholder="https://your-image-host.com/image.jpg"
                            className="w-full border border-gray-300 rounded-lg p-3"
                        />
                    </div>

                    {/* Price & Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Price (BDT / day)
                            </label>
                            <input
                                name="price"
                                type="number"
                                placeholder="2500"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Type
                            </label>
                            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="type" value="Automatic" />
                                    <span>Automatic</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="type" value="Manual" />
                                    <span>Manual</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Engine CC & Mileage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Engine CC
                            </label>
                            <input
                                name="engineCC"
                                type="text"
                                placeholder="1500"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Mileage (km/l)
                            </label>
                            <input
                                name="mileage"
                                type="text"
                                placeholder="20 km/l"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                    </div>

                    {/* Seats  & FuelType */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Seats
                            </label>
                            <input
                                name="seats"
                                type="number"
                                placeholder="02"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Fuel Type
                            </label>
                            <input
                                name="fuelType"
                                type="text"
                                placeholder="Petrol"
                                className="w-full border border-gray-300 rounded-lg p-3"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Describe your vehicle's condition, features, and rental terms..."
                            className="w-full border border-gray-300 rounded-lg p-3 h-28"
                        ></textarea>
                    </div>
                </div>

                {/* RIGHT SIDE: Calendar */}
                <div>
                    <label className="block text-gray-700 font-medium mb-3">Calendar</label>
                    <div className="border border-gray-200 rounded-xl p-5 shadow-sm h-fit">
                        
                        <DateRange
                            rangeColors={['#16A34A']}
                            editableDateInputs={true}
                            onChange={item => handleDates(item)}
                            moveRangeOnFirstSelection={false}
                            ranges={[dates]}
                        />
                    </div>
                </div>

                {/* BUTTONS (bottom full width) */}
                <div className="col-span-1 lg:col-span-3 flex justify-end gap-4 mt-6">
                    <button
                        type="button"
                        className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        disabled={loading}
                        type="submit"
                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        {
                            loading ? (<p className="animate-spin m-auto">Loading...</p>) : (
                                'Save & Continue'
                            )
                       }
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddVehicle;
