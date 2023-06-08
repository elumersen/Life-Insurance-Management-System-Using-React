import "./policies.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatablecopy from "../../components/datatable/Datatable"
// import Datatable from "../../components/datatable/Datatable"
import Datatablepolicies from "../../components/datatablepolicies/DatatablePolicies"
// import Datatablepolicy from "../../components/datatablecopy/DatatablePolicy"



const Policies = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatablepolicies/>
      </div>
    </div>
  )
}

export default Policies;