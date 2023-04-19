import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import SignUp from './pages/SignUp';
import SignIn from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/Error';
import AdminPage from './pages/AdminPage';
import MenuUpdate from './pages/MenuUpdate';
import FeeUpdate from './pages/FeeUpdate';
import {Home} from './components/Home/Home'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'
import Buytoken from './components/BuyToken/Buytoken'
import GoogleOAuth from './pages/GoogleOAuth.js';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/subscribe' element={<Subscribe/>} ></Route>
        <Route path='/buytoken' element={<Buytoken/>} ></Route>
        <Route path='/login' element={<GoogleOAuth/>} ></Route>
        <Route path='/profilepage' element={<ProfilePage></ProfilePage>} ></Route>
        <Route path='/adminpage' element={<AdminPage></AdminPage>} ></Route>
        <Route path='/updatemenu' element={<MenuUpdate></MenuUpdate>} ></Route>
        <Route path='/updatefee' element={<FeeUpdate></FeeUpdate>} ></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
       </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
