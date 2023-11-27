
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Product from './components/Product';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import NoAccess from './pages/NoAccess';
import PrivateRouter from './components/PrivateRouter';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';
import store from './redux/store'
import jwt_decode from 'jwt-decode'
import { Logout, setUser } from './redux/actions/authActions';
import { useSelector } from 'react-redux';
import { setAuth } from './util/setAuth';
import ProductForm from './pages/ProductForm';

 if(window.localStorage.jwt){
   const decode = jwt_decode(window.localStorage.jwt)
   store.dispatch(setUser(decode))
   setAuth(window.localStorage.jwt)
   const currentDate = Date.now / 1000

   if(decode.exp >  currentDate){
    store.dispatch(Logout()) 
   }
 }


function App() {
  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }
  return (
    <BrowserRouter>
    <div className="bg-light" style={{height: "100vh"}}>
     <Navbar user={user}/>
    <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={
          <PrivateRouter user={user}>
            <Profile />
          </PrivateRouter>
        } />
        <Route path="/Products" element={
          <PrivateRouter user={user}>
            <Products />
          </PrivateRouter>
        } />
          <Route path="/login" element={
          <ForceRedirect user={user}>
            <Login />
          </ForceRedirect>
        } />
          <Route path="/register" element={
          <ForceRedirect user={user}>
            <Register />
          </ForceRedirect>
        } />
          <Route path="/admin" element={
          <AdminRouter user={user}>
            <Admin />
          </AdminRouter>
        } />
        <Route path="/Products" element={
          <AdminRouter user={user}>
            <Products />
          </AdminRouter>
        } />
         <Route path="/ProductForm" element={
          <AdminRouter user={user}>
            <ProductForm />
          </AdminRouter>
        } />
          <Route path="*" element={<NotFound />} />
          <Route path="/noaccess" element={<NoAccess />} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
