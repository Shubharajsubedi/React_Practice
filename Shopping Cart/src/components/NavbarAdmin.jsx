import { Link, useNavigate } from "react-router-dom"
import useLoginStore from "../store/LoginStore"




const NavbarAdmin = () => {
  const loggingout = useLoginStore((state)=>state.logout)
  const navigate = useNavigate();

const handleLogut = () => {
    loggingout();
    navigate("/login")
}
  return (
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
          to="/viewsales"
          className="font-medium text-gray-600 transition hover:text-blue-600"
        >
          <li>View Sales</li>
        </Link>

        <Link
          to="/logindetails"
          className="font-medium text-gray-600 transition hover:text-blue-600"
        >
          <li>View Login Details</li>
        </Link>

        <Link
          to="/addproducts"
          className="font-medium text-gray-600 transition hover:text-blue-600"
        >
          <li>Add Products</li>
        </Link>
      </ul>

      <button
        onClick={handleLogut}
        className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 hover:shadow-md"
      >
        Logout
      </button>

    </div>
  </div>
  )
}

export default NavbarAdmin;