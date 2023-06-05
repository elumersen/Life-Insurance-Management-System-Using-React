import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutline from "@mui/icons-material/PersonOutline";
import ListAlt from '@mui/icons-material/ListAlt';
import Policy from '@mui/icons-material/Policy';


const Widget = ({ type }) => {
  let data;
  //temporary
  let amount ;
  let diff = 27;

  switch (type) {
    case "agent":
      data = {
        title: "Total Agents",
        amount: 2000,
        diff: 20,
        isMoney: false,
        link: "See all Agents",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "activeAgent":
      data = {
        title: "Active Agents",
        amount: 1500,
        diff: 27,
        isMoney: false,
        link: "View all Agents",
        icon: (
          <PersonOutline
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "forms":
      data = {
        title: "Pending Forms",
        amount: 5,
        diff: 10,
        // isMoney: true,
        link: "View All Forms",
        icon: (
          <ListAlt
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "policies":
      data = {
        title: "Active Policies",
        amount: 12,
        diff: 50,
        // isMoney: true,
        link: "See all Policies",
        icon: (
          <Policy
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
      
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "birr-"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
