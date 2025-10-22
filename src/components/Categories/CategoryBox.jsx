import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';

const CategoryBox = ({ category }) => {

    const navigate = useNavigate()

    const handleCategory = () => {
        let currentQuery = { category: category.name }
        const url = queryString.stringifyUrl({
            url: '/',
            query: currentQuery,
            
        })
        console.log(url)
        navigate(url)
    }

    return (
        <div onClick={handleCategory}
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
    );
};

export default CategoryBox;