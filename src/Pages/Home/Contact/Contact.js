import React from 'react';
import {
	FaEnvelope,
	FaPhoneAlt,
	FaLocationArrow,
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";


const Contact = () => {
    return (
		<div className="grid grid-cols-1 lg:grid-cols-2 lg:px-32 my-20">
			<div className="bg-sky-600 lg:pb-32 lg:px-4 lg:pt-5 text-white">
				<h2 className="text-xl font-bold">Contact Information</h2>
				<p>We are eager to hear from you. Contact us today.</p>
				<div className="mt-14">
					<p className="flex gap-2 items-center mb-4">
						<span><FaEnvelope /></span>
						<span>resalemania@gmail.com</span>
					</p>
					<p className="flex gap-2 items-center mb-4">
						<span><FaPhoneAlt/></span>
						<span>+34566622278</span>
					</p>
					<p className="flex gap-2 items-center">
						<span><FaLocationArrow/></span>
						<span>resalemania@gmail.com</span>
					</p>
                    <div className="social absolute lg:pt-44 flex gap-8 lg:pl-56">
                        <span><FaFacebookF/></span>
                        <span><FaLinkedinIn/></span>
                        <span><FaTwitter/></span>
                    </div>
				</div>
			</div>
			<div className="bg-white py-10 lg:px-32 lg:pt-5">
				<div className="form-control mb-3">
					<label>Name</label>
					<input
						type="text"
						placeholder="Your Name"
						className="input input-bordered bg-white w-full"
					/>
				</div>
				<div className="form-control mb-3">
					<label>Email</label>
					<input
						type="email"
						placeholder="Your Email"
						className="input input-bordered bg-white w-full"
					/>
				</div>
				<div className="form-control">
					<label htmlFor="">Message</label>
					<textarea
						className="textarea textarea-bordered rounded-lg bg-white w-full h-[200px]"
						placeholder="Bio"
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default Contact;