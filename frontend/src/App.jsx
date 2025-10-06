import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import useAuthContext from "./hooks/useAuthContext"

import Home from './components/home'
import Navbar from './components/navbar'  
import Login from './components/login'
import Signup from './components/signup'
import NotFound from "./components/NotFound"

function App() {
  const {user}=useAuthContext();  

  return (
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element={user?<Home/>:<Navigate to='/login'/>}/>
    <Route path='/login' element={!user?<Login/>:<Navigate to='/'/>}/>
    <Route path='/signup' element={!user?<Signup/>:<Navigate to='/'/>}/> 
    <Route element={<NotFound/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App
