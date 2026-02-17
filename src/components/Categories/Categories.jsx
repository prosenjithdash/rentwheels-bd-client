import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
// categories part
const Categories = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-[#0F172A] via-[#0B1220] to-[#0F172A] px-4">
            <div className="max-w-7xl mx-auto ">
                <div className=" 
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-6 
                gap-6
       ">
                    {
                        categories.map((category, idx) =>
                            <CategoryBox
                                key={idx} category={category}
                            ></CategoryBox>
                        )
                    }
                </div>
            </div>
        </section>
        
    );
};

export default Categories;

// 1. make data
// 2. fetch data
// 3. map data
// 4. Make card
// 5. Display data