import { Route,Routes } from 'react-router';
import './App.css'
import { Navbar} from "../src/Components/common/Navbar"
import Dashboard from './Components/pages/Dashboard/Dashboard';
import { Homepage } from './Components/pages/Homepage/Homepage';
import { Login } from './Components/Auth/Login';
import { Signup } from './Components/Auth/Signup';

function App() {
 
  return (
    
    <div className="min-w-[100vw] min-h-[100vh] bg-richblack-800 flex flex-col font-inter ">
    
      <Navbar/>
    
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    
    </div>

    
   
  )
}

export default App
