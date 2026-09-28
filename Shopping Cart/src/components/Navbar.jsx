
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-10 px-6'>
        <div className='logo font-bold text-xl'>Login Authentication</div>
        <ul className='bg-black-100 flex gap-4' >
            <Link to={"/home"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/services"}><li>Services</li></Link>
            <Link to={"/contact us"}><li>Contact Us</li></Link>
        </ul>
            <Link to = {"/login"}><button className="bg-green-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign In
                </button></Link>
              
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              
            
          
    </div>
  )
}

export default Navbar