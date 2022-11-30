import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
	const products = useLoaderData();
	const categoryProducts = products.products;
	const [items, setItems] = useState([]);

	const handleShowItem = (product) => {
		setItems([product]);
	};

	return (
		<div className="lg:container lg:px-32 grid grid-cols-1 lg:grid-cols-3 py-20">
			{categoryProducts && 
				categoryProducts.map(product => <ProductCard
				key={product._id}
				product={product}
				handleShowItem={handleShowItem}
				items={items}
				setItems={setItems}
				></ProductCard>)
			}
		</div>
	);}
					// <ProductCard
					// 	key={product._id}
					// 	product={product}
					// 	handleShowItem={handleShowItem}
					// 	items={items}
					// ></ProductCard>
			

export default Products;
