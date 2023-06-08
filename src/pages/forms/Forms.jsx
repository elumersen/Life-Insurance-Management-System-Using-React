import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Forms from "../../components/form/Forms"



const Policies  = () => {
  return (
    <div className="policies ">
      <Sidebar/>
      <div className="policiesContainer">
        <Navbar/>
        <Forms/>
      </div>
    </div>
  )
}

export default Policies 