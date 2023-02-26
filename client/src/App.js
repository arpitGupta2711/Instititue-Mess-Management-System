import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/Error';
import AdminPage from './pages/AdminPage';
import MenuUpdate from './pages/MenuUpdate';
import FeeUpdate from './pages/FeeUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='/login' element={<SignIn></SignIn>} ></Route>
        <Route path='/profilepage' element={<ProfilePage></ProfilePage>} ></Route>
        <Route path='/adminpage' element={<AdminPage></AdminPage>} ></Route>
        <Route path='/updatemenu' element={<MenuUpdate></MenuUpdate>} ></Route>
        <Route path='/updatefee' element={<FeeUpdate></FeeUpdate>} ></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
