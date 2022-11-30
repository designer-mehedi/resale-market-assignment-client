import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { router } from "./Routes/Router/Routes";

function App() {
  return (
    <div className="text-black">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
