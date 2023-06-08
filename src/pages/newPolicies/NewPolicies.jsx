import "./newPolicies.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewPolicies = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="newPolicies">
      <Sidebar />
      <div className="newPoliciesContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
        {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <form>
            {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label htmlFor="file">
                policy document: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                {/* <input type="file" name="file" onChange={(e)=>this.onChange(e)} /> */}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => this.onChange(e)}
                  style={{ display: "none" }}
                  // onChange={(e) => setFile(e.target.files[0])}
                  // style={{ display: "none" }}
                />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPolicies;
