export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "Full Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  
  {
    field: "PhoneNumber",
    headerName: "Phone Number",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  
  {
    field: "Organizations",
    headerName: "Organizations",
    width: 100,
  },
  {
    field: "Address",
    headerName: "Address",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus birr-{params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    Address: "Addis Ababa",
    Organizations: "AAU",
    username: "Agent1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent1@gmail.com",
    status: "passive",
    PhoneNumber: 98765555555,
  },
  {
    id: 2,
    username: "Agent2",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent2@gmail.com",
    status: "pending",
    PhoneNumber: 98765555555,
  },
  {
    id: 3,
    username: "Agent3",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent3@gmail.com",
    status: "active",
    PhoneNumber: 98765555555,
  },
  {
    id: 4,
    username: "Agent4",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent4@gmail.com",
    status: "passive",
    PhoneNumber: 98765555555,
  },
  {
    id: 5,
    username: "Agent5",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent5@gmail.com",
    status: "active",
    PhoneNumber: 98765555555,
  },
  {
    id: 6,
    username: "Agent6",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent6@gmail.com",
    status: "passive",
    PhoneNumber: 98765555555,
  },
  {
    id: 7,
    username: "Agent7",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent7@gmail.com",
    status: "active",
    PhoneNumber: +251987654334,
  },
  {
    id: 8,
    username: "Agent8",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Agent8@gmail.com",
    status: "pending",
    PhoneNumber: 251987654334,
  },
  {
    id: 9,
    username: "Agent9",
    Address: "Addis Ababa",
    Organizations: "AAU",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    PhoneNumber: 251987654334,
  },
];
