import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategoryCards = ({category}) => {

    const {category: categoryName, img, _id} = category;
    return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure className="bg-white">
					<img src={img} alt="Shoes" />
				</figure>
				<div className="flex justify-between py-5 px-3">
					<div>
                        <h2 className="text-xl font-bold">{categoryName}</h2>
                    </div>
					<div>
						<Link to={`/products/${_id}`}>
							<button className="text-2xl"><BsArrowRight/></button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryCards;