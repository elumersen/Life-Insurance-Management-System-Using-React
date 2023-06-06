import "./datatablePolicy.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { userColumns, userRows } from "../../policydatatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatablepolicies = () => {
  const [data] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <Link to="/policies" style={{ textDecoration: "none" }}>
  //             <div className="viewButton">Edit</div>
  //           </Link>
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //           <Link to="/agents/test" style={{ textDecoration: "none" }}>
  //             <div className="viewButton">View</div>
  //           </Link>
  //         </div>
  //       );
  //     },
  //   },
  // ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New policies
        <Link to="/agents/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat()}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatablepolicies;
