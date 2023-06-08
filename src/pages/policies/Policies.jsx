import "./policies.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatablecopy from "../../components/datatable/Datatable"
// import Datatable from "../../components/datatable/Datatable"
import DatatablePolicies from "../../components/datatablepolicies/DatatablePolicies"


const Policies  = () => {
  return (
    <div className="policies ">
      <Sidebar/>
      <div className="policiesContainer">
        <Navbar/>
        <DatatablePolicies/>
      </div>
    </div>
  )
}

export default Policies 