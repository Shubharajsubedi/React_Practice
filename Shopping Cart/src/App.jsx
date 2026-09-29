import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import CustomerDashboard from "./pages/CustomerDashboard"
import LandingPage from "./pages/landingPage"
import Home from "./components/Home"
import ViewLoginDetails from "./users/admin/ViewLoginDetails"
import AddProducts from "./users/admin/AddProducts"
import About from "./components/About"
import Theme from "./components/Theme"

import useThemeStore from "./store/ThemeStore"

const App = () => {
  const { theme, setTheme } = useThemeStore()

  return (
    <div className={theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white theme-dark"}>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path = "/customer" element = {<CustomerDashboard/>}/>
        <Route path="/logindetails" element = {<ViewLoginDetails/>}/>
        <Route path = "/addproducts" element={<AddProducts/>}/>
        <Route path = "/about" element={<About/>}/>
        
        
      </Routes>
    </div>
  )
}

export default App