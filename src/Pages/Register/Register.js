import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {register, handleSubmit} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);

    const handleRegister = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName : data.name
            }
            toast.success('Registered Successfully');
            updateUser(userInfo)
            .then(() => {
                saveUser(data.name, data.email);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
    }

    const saveUser = (name, email) => {
        const user = {name, email}
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }
    

    return (
		<div className="lg:my-24 lg:h-[620px] h-[700px] flex flex-col border lg:w-[30%] w-full m-auto bg-slate-100 rounded-md shadow-lg px-10">
			<form className="flex flex-col w-full m-auto" onSubmit={handleSubmit(handleRegister)}>
                <h2 className="text-center text-xl font-bold">Sign Up</h2>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Name</span>
                    </label>
                    <input className="py-3 px-2" {...register("name")} placeholder="Your Name" />
                </div>
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
                </div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text text-lg">Select an account type</span>
					</label>
					<select className="border-none py-3" {...register("category", { required: true })}>
					<option value="user">User</option>
					<option value="seller">Seller</option>
				</select>
				</div>
				<input className="bg-sky-500 text-white py-3 mt-4 text-lg cursor-pointer" type="submit" value="Sign Up"/>
                <span>Already have an account? <Link to="/login">Login</Link></span>
			</form>
			<div className="pb-8">
				<button className="border border-gray-300 w-full py-3">Login with Google</button>
			</div>
		</div>
	);
};

export default Register;


/*
<select {...register("category", { required: true })}>
					<option value="">Select...</option>
					<option value="A">Option A</option>
					<option value="B">Option B</option>
				</select>
*/ 