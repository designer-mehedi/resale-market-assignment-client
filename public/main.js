<div className="lg:container lg:px-32 grid grid-cols-1 lg:grid-cols-3">
	{categoryProducts.map((product) => {
		return (
			<div
				className="card card-compact w-96 bg-base-100 shadow-xl"
				key={product._id}
			>
				<figure>
					<img src={product.image} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{product.productName}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions">
						{/* The button to open modal */}
						<label
							onClick={() => handleShowItem(product)}
							htmlFor="my-modal-3"
							className="btn"
						>
							open modal
						</label>

						{/* Put this part before </body> tag */}
						<input
							type="checkbox"
							id="my-modal-3"
							className="modal-toggle"
						/>
						<div className="modal">
							<div className="modal-box relative">
								<label
									htmlFor="my-modal-3"
									className="btn btn-sm btn-circle absolute right-2 top-2"
								>
									✕
								</label>
								{items.map((item) => {
									const bookingInfo = (e) => {
										e.preventDefault();
										const form = e.target;
										const userName = user?.displayName;
										const email = user?.email;
										const product = form.product.value;
										const price = form.price.value;
										const phone = form.phone.value;
										const location = form.location.value;
										console.log(
											email,
											product,
											price,
											phone,
											location
										);

										const booking = {
											serviceId: product._id,
											customer: userName,
											email,
											product,
											price,
											phone,
											location,
										};

										fetch(
											"http://localhost:5000/bookings",
											{
												method: "POST",
												headers: {
													"content-type":
														"application/json",
												},
												body: JSON.stringify(booking),
											}
										)
											.then((res) => res.json())
											.then((data) => {
												console.log(data);
											})
											.catch((err) => console.log(err));
									};
									return (
										<div>
											<h2>{item.productName}</h2>
											<form onSubmit={bookingInfo}>
												<div className="form-control w-full mb-3">
													<input
														type="text"
														name="name"
														placeholder="Type here"
														className="input input-bordered w-full rounded-lg"
														defaultValue={
															user?.displayName
														}
														disabled
													/>
												</div>
												<div className="form-control w-full mb-3">
													<input
														type="email"
														name="email"
														placeholder="Type here"
														className="input input-bordered w-full rounded-lg"
														defaultValue={
															user?.email
														}
														disabled
													/>
												</div>
												<div className="form-control w-full mb-3">
													<input
														type="text"
														name="product"
														placeholder="Type here"
														className="input input-bordered w-full rounded-lg"
														value={item.productName}
													/>
												</div>
												<div className="form-control w-full mb-3">
													<input
														type="text"
														name="price"
														placeholder="Type here"
														className="input input-bordered w-full rounded-lg"
														value={item.resalePrice}
														disabled
													/>
												</div>
												<div className="form-control w-full mb-3">
													<input
														type="text"
														name="phone"
														placeholder="Phone No"
														className="input input-bordered w-full rounded-lg"
													/>
												</div>
												<div className="form-control w-full mb-3">
													<input
														type="text"
														name="location"
														placeholder="Meeting Location"
														className="input input-bordered w-full rounded-lg"
													/>
												</div>
												<input
													type="submit"
													className="btn btn-primary bg-sky-500 rounded-lg text-white w-full text-center"
													value="Confirm Booking"
												/>
											</form>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	})}
</div>;
