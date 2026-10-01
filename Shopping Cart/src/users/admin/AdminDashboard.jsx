
import useLoginStore from "../../store/LoginStore"

import NavbarAdmin from "../../components/NavbarAdmin"


const AdminDashboard = () => {

  const user = useLoginStore((state) => state.login)



 
  return (
   
    <div>
      <NavbarAdmin/>

      <div>Hello I'm {(user.username)} Admin</div>
    
    </div>
    
    
    
    
    
  )
}

export default AdminDashboard