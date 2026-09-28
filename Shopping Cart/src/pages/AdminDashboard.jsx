
import useLoginStore from "../store/LoginStore"

import NavbarForPages from "../components/NavbarForPages"


const AdminDashboard = () => {

  const user = useLoginStore((state) => state.user)



 
  return (
   
    <div>
      <NavbarForPages/>

      <div>Hello I'm {user.username} Admin</div>
    
    </div>
    
    
    
    
    
  )
}

export default AdminDashboard