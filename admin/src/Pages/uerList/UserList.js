import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {userRows} from "../../dummyData";
import { userRequest } from "../../requestMethods";
export const UserList = () => {

    //const [data, setData] = useState(userRows);
    const [users,setUsers]=useState([])

    useEffect(()=>{
      const getUsers= async ()=>{
        try{
        const res=await userRequest.get("/users")
        setUsers(res.data)
        }catch(error){
    
        }
      }
      getUsers()
      },[])
    

console.log(users)

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };
    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User', width: 200} ,
       
        { field: 'email', headerName: 'Email', width: 170},
       
       
         {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
          },
      ];
      const rows = [
        { id: 1, 
         username : 'Nithin', 
        avatar: "https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382732.jpg&fm=jpg",
        email:'nithin@gmail.com',
        status:'active',
        transaction:"$120",

         age: 35 },
         { id: 2, 
            username : 'Nithin',  
        avatar: "https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462636.jpg&fm=jpg",
        email:'nithin@gmail.com',
        status:'active',
        transaction:"$120",
        
         age: 35 },
         { id: 3, 
            username : 'Nithin', 
        avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email:'nithin@gmail.com',
        status:'active',
        transaction:"$120",
        
         age: 35 },
         { id: 4, 
            username : 'Nithin', 
        avatar: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382734.jpg&fm=jpg",
        email:'nithin@gmail.com',
        status:'active',
        transaction:"$120",
        
         age: 35 }
       
      ];
      
    return (
        <div className="userList">
            <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
