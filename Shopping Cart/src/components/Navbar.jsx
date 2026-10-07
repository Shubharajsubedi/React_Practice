
import { Link } from "react-router-dom"


const Navbar = () => {
    
  return (
    <>
      <div className="w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        <Link to="/home" className="text-xl font-bold text-gray-900">
          Login Authentication
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <Link
            to="/home"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            <li>Home</li>
          </Link>

          <Link
            to="/about"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            <li>About</li>
          </Link>

          <Link
            to="/services"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            <li>Services</li>
          </Link>

          <Link
            to="/contactus"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            <li>Contact Us</li>
          </Link>
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/register">
            <button className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 hover:shadow-md">
              Register
            </button>
          </Link>

          <Link to="/login">
            <button className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 hover:shadow-md">
              Login
            </button>
          </Link>
        </div>

      </div>
    </div>

    
    </>
    
  )
}

export default Navbar