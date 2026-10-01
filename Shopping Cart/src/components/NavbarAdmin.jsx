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
    <div className='flex justify-between items-center  px-90'>
        <div className='logo font-bold text-xl'>Login Authentication</div>
        <ul className='bg-black-100 flex gap-4' >
            <Link to={"/home"}><li>Home</li></Link>
            <Link to={"/viewsales"}><li>View Sales</li></Link>
            <Link to={"/logindetails"}><li>View Login Details</li></Link>
            <Link to={"/addproducts"}><li>Add Products </li></Link>
        </ul>
            
              
                <button className="bg-purple-700 text-white rounded-full cursor-pointer"
                onClick={handleLogut}>
                  Logout
                </button>
             
            
          
    </div>
  )
}

export default NavbarAdmin;