import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import BookingsCard from "./BookingsCard";

const MyBookings = () => {
    const {user} = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch(
			`https://resale-products-server-green.vercel.app/bookings?email=${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => setBookings(data));
    }, [user?.email]);


    return (
		<div>
			<h2>My Orders</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 py-10">
				{bookings.map((booking) => (
					<BookingsCard
						key={booking._id}
						booking={booking}
					></BookingsCard>
				))}
			</div>
		</div>
	);
};

export default MyBookings;