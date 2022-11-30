import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../../Layout/LoginLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/ProductsCategory/Products";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/products/:id",
				element: <Products />,
				loader: ({ params }) =>
					fetch(
						`https://resale-products-server-taupe.vercel.app/category/${params.id}`
					),
			},
		],
	},
	{
		path: "/",
		element: <LoginLayout />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);