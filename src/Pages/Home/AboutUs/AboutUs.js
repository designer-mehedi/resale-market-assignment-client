import React from 'react';

const AboutUs = () => {
    return (
		<div className="hero bg-white py-20">
			<div className="hero-content flex-col lg:flex-row">
				<div className="lg:w-1/2">
					<img
						src="https://bestfulfill.com/wp-content/uploads/2022/08/sourcing-wholesale-products-for-resale.jpg"
						className="w-[550px] h-[400px] rounded-lg shadow-2xl"
						alt=""
					/>
				</div>
				<div className="lg:w-1/2">
					<h1 className="text-5xl font-bold">We are dedicated at your Service</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;