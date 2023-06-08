import "./forms.scss";
import { DataGrid } from "@mui/x-data-grid";

const Forms = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 180 },
    { field: "relation", headerName: "Relationship", width: 200 },
    { field: "address", headerName: "Address", width: 140 },
    { field: "in", headerName: "In %", width: 200 },
  ];
  const rows = [
    { id: 1, name: "Name", relation: "policy", address: "Addis", in: 20 },
    { id: 2, name: "Name", relation: "policy", address: "Addis", in: 44 },
    { id: 3, name: "Name", relation: "policy", address: "Somalia", in: 20 },
    { id: 4, name: "Name", relation: "policy", address: "Mekele", in: 30 },
    { id: 5, name: "Name", relation: "policy", address: "addis", in: 40 },
    { id: 6, name: "Name", relation: "", address: "address", in: 50 },
  ];

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Beneficiary Declaration Form</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Policy Owner </label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Agency Name </label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Assured's Name </label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="formInput">
                <label>Region </label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label> Zone</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Woreda </label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Tel no. </label>
                <input type="text" placeholder="+251..." />
              </div>
              <div className="formcountry">
                <label className="labelcountry">Country of Destination :</label>
                <select>
                  <option>select</option>
                  <option>Ethiopia</option>
                  <option>Sudan</option>
                  <option>USA</option>
                  <option>Ertria</option>
                  <option>Uganda</option>
                  <option>Canada</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className="datatable">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              // pagination: {
              //   paginationModel: { page: 0, pageSize: 5 },
              // },
            }}
            // pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        </div>
        <div>
          <button className="buttonSend">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
