
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import Pay from "./pages/Pay"
import { useSelector } from 'react-redux';

function App() {
  const user=useSelector(state=>state.user.currentUser);
  return (
  <Router>
    <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route  path="/cart"> <Cart/> </Route>
      <Route  path="/products/:category"> <ProductList/> </Route>
      <Route  path="/product/:id"> <Product/> </Route>
      <Route  path="/login">{user?<Redirect to="/" />:<Login />} </Route>
      <Route  path="/register"> {user?<Redirect to="/" />:<Register />} </Route>
      <Route path="/success"><Success/></Route>
    </Switch>
    </Router>
  );
}

export default App;
