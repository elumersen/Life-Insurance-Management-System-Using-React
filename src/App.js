import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Policies from "./pages/policies/Policies";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Forms from "./pages/forms/Forms";
import NewPolicies from "./pages/newPolicies/NewPolicies"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { policiesInputs, AgentInputs } from "./formSource";
// import { policiesInputs, AgentInputs } from "./formSourcePolicies";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { policy } from "@mui/icons-material";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/agents">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={AgentInputs} title="Add New Agent" />}
              />
            </Route>
            <Route path="/policies">
              <Route index element={<Policies />} />
              <Route path=":productId" element={<Single />} />
              <Route 
                path="newPolicies"
                element={<NewPolicies inputs={policiesInputs} title="Add New policies" />}
              />
            </Route>
            <Route path="/forms">
              <Route index element={<Forms />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              <Route 
                // path="newPolicies"
                // element={<NewPolicies inputs={policiesInputs} title="Add New policies" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
