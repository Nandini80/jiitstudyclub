import { Route,Routes } from 'react-router';
import './App.css'
import { Navbar} from "../src/Components/common/Navbar"
import Dashboard2 from './Components/pages/Dashboard/Dashboard2';
import { Homepage } from './Components/pages/Homepage/Homepage';
import { Login } from './Components/Auth/Login';
import { Signup } from './Components/Auth/Signup';
import  Cart  from './Components/pages/Dashboard/Cart';
import Profile from './Components/pages/Dashboard/Profile';
import  Setting  from './Components/pages/Dashboard/Settings';

function App() {
 
  return (
    
    <div className="min-w-[100vw] min-h-[100vh] bg-richblack-800 flex flex-col font-inter ">
    
      <Navbar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard2/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/settings' element={<Setting/>}/>

      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    
    </div>

    
   
  )
}

export default App
