import "./policies.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatablecopy from "../../components/datatable/Datatable"
// import Datatable from "../../components/datatable/Datatable"
import Datatablepolicy from "../../components/datatablecopy/DatatablePolicy"
// import Datatablepolicy from "../../components/datatablecopy/DatatablePolicy"



const policies = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatablepolicy/>
      </div>
    </div>
  )
}

export default policies;