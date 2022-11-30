import React, { useEffect, useState } from 'react';
import CategoryCards from "./CategoryCards";

const ProductsCategory = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://resale-products-server-taupe.vercel.app/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data));
    }, [])
//    const {data: categories = [], isLoading} = useQuery({
//         queryKey: ['categories'],
//         queryFn: async() => {
//                 const res = await fetch("http://localhost:5000/categories");
//                 const data = await res.json();
//                 return data;
//         }
//    })

//    if(isLoading) {
//         return <p>Loading</p>
//    }
    return (
        <div className="lg:container lg:px-32">
            <h2 className="text-center text-3xl font-semibold my-5">Products category</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 my-10">
                {
                    categories.map(category => <CategoryCards
                    key={category._id}
                    category={category}
                    ></CategoryCards>)
                }
            </div>
        </div>
    );
};

export default ProductsCategory;