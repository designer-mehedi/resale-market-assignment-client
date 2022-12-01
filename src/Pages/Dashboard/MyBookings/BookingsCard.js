import React from 'react';

const BookingsCard = ({ booking }) => {
	
	const { product, productImage } = booking;
	// const bookedProducts = categoryProducts;
	// console.log(bookedProducts);    
    
	return (
		<div className="card bg-base-100 shadow-xl">
			<figure>
				<img src={productImage} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{product}</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default BookingsCard;