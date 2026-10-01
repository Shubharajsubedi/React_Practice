import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Register from "./pages/Register";
import AdminDashboard from "./users/admin/AdminDashboard";
import CustomerDashboard from "./users/customer/CustomerDashboard";
import LandingPage from "./pages/LandingPage";
import Home from "./components/Home";
import ViewLoginDetails from "./users/admin/ViewLoginDetails";
import AddProducts from "./users/admin/AddProducts";
import About from "./components/About";
import Login from "./pages/Login";
import EditCustomer from "./users/admin/EditCustomer";
import Contactus from "./components/Contactus";
import AddtoCart from "./users/customer/AddtoCart";
import PurchasedGoods from "./users/customer/PurchasedGoods";

const App = () => {

 
  const [darkMode, setDarkMode] = useState(false);

  return (

    
    <div
      className={
        darkMode
          ? "dark min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-white text-black"
      }
    >

   
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed right-10 top-5 z-50 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>


      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />
        
        <Route path="/login" element = {<Login/>}/>

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/customer" element={<CustomerDashboard />} />

        <Route path="/logindetails" element={<ViewLoginDetails />}/>

        <Route path="/editingcustomer/:id" element ={<EditCustomer/>}/>

        <Route path="/addproducts" element={<AddProducts />}/>

        <Route path="/about" element={<About />}/>
        
        <Route path="/contactus" element={<Contactus/>}/>
        
        <Route path ="/cart" element={<AddtoCart/>}/>
        
        <Route path= "/purchased" element= {<PurchasedGoods/>}/>

      </Routes>

    </div>
  );
};

export default App;