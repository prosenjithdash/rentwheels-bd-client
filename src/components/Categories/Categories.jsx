import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
// categories part
const Categories = () => {
    return (
        <div className="max-w-7xl mx-auto text-center">
            <div className="text-center  grid grid-cols-8 gap-5 overflow-x-auto ">
                {
                    categories.map((category, idx) =>
                        <CategoryBox
                            key={idx} category={category}
                        ></CategoryBox>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;

// 1. make data
// 2. fetch data
// 3. map data
// 4. Make card
// 5. Display data