import "./datatablePolicies.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../policydatatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatablepolicies = () => {
  const [data] = useState(userRows);
  return (
    <div className="datatablepolicies">
      <div className="datatablepoliciesTitle">
        Add New policies
        <Link to="/policies/newPolicies" className="link">
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
