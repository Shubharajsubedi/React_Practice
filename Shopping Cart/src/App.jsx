import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"
import CustomerDashboard from "./pages/CustomerDashboard"
import LandingPage from "./pages/landingPage"
import Home from "./components/Home"


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path = "/customer" element = {<CustomerDashboard/>}/>
      </Routes>
    
  )
}

export default App