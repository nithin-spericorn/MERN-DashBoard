import Sidebar from "./components/SideBar/Sidebar";
import TopBar from "./components/TopBar/TopBar"
import "./app.css"
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserList } from "./Pages/uerList/UserList";
import User from "./Pages/user/user";
import NewUser from "./Pages/newPage/NewUser"
import { ProductList } from "./Pages/productList/ProductList";
import { Product } from "./Pages/Product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import  Login  from "./Pages/user/Login";
function App() {
  const admin=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.data;
  //console.log(admin)
  return (
   <Router>
     <Switch>
     <Route path="/login">
      <Login/>
      </Route>
      {admin && (
        <>
     <TopBar/>
     <div className="container">
       <Sidebar/>
       
         <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/users">
      <UserList/>
      </Route>
    
      <Route path="/user/:userId">
      <User/>
      </Route>
      <Route path="/newUser">
      <NewUser/>
      </Route>
      <Route path="/products">
      <ProductList/>
      </Route>
      <Route path="/product/:productId">
      <Product/>
      </Route>
      <Route path="/newproduct">
      <NewProduct/>
      </Route>
     
     
     </div>
     </>)}
     </Switch>
    </Router>
  );
}

export default App;
