import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { register, handleSubmit } = useForm();
	const { login } = useContext(AuthContext);

	const handleLogin = (data) => {
		console.log(data);
		login(data.email, data.password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((err) => console.log(err));
	};
    return (
		<div className="lg:mt-24 lg:h-[450px] h-[500px] flex flex-col border lg:w-[30%] m-auto bg-slate-100 rounded-md shadow-lg px-10">
			<form className="flex flex-col w-full m-auto" onSubmit={handleSubmit(handleLogin)}>
                <h2 className="text-center text-xl font-bold">Login</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Email</span>
                    </label>
                    <input className="py-3 px-2 border-none" type="email" {...register("email")} placeholder="Your Email" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input className="py-3 px-2 border-none" type="password" {...register("password")} placeholder="Your Password" />
                    <label className="label">
						<span className="label-text">Forgot password?</span>
					</label>
                </div>
				<input className="bg-sky-500 text-white py-3 mt-4" type="submit" value="Login"/>
                <span>New to resale mania? <Link to="/register">Sign Up</Link></span>
			</form>
            <div className="pb-8">
				<button className="border border-gray-300 w-full py-3">Login with Google</button>
			</div>
		</div>
	);
};

export default Login;