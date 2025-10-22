import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
// categories part
const Categories = () => {
    return (
        <div className=" grid grid-cols-8 gap-5 overflow-x-auto">
            {
                categories.map((category,idx) =>
                    <CategoryBox
                        key={idx} category={category}
                    ></CategoryBox>
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