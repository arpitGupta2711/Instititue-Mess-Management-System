import './App.css';
import Navbar from './components/Navbar/Navbar'
import {Home} from './components/Home/Home'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <Subscribe/> */}
     <Footer/>
    </div>
  );
}

export default App;
