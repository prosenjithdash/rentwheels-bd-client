import { categories } from "./CategoriesData";
// categories part
const Categories = () => {
    return (
        <div className="grid grid-cols-8 gap-5">
            {
                categories.map(category =>
                    <div
                        className="border-4 border-green-500 rounded-r-full p-5 space-y-2">
                        <p
                            className="font-extrabold text-center">
                            {category.name}
                        </p>
                        <p
                            className="border rounded-full p-2 text-[10px] font-semibold text-green-500">
                            {category.icon} 
                        </p>
                        <p
                            className="text-[8px]">
                            {category.description}
                        </p>

                    </div>
                )
            }
        </div>
    );
};

export default Categories;

// 1. make data
// 2. fetch data
// 3. map data
// 4. Make card
// 5. Display data