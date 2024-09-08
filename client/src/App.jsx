import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Appoitment from './components/pages/appoitment/Appoitment';
import MySchedule from './components/pages/appoitment/Schedule';
import Login from './components/pages/users/Login';
import Register from './components/pages/users/Register'
import Service from './components/pages/services/Service';
import MyServices from './components/pages/services/MyService'
import AddService from './components/pages/services/AddService'
import ProtectedRoute from './utils/ProtectedRoutes';
import Logout from './components/pages/users/Logout';
import Navbar from './Layouts/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <Router>
      <Routes>
        <Route exact path ="/" element={<Home/>}></Route>
        <Route element={<ProtectedRoute/>}>
          <Route exact path ="/agendamento" element={<Appoitment/>}></Route>
          <Route path = "/agendamentos" element={<MySchedule/>}></Route>
        </Route>
        <Route exact path = "/login" element={<Login/>}></Route>
        <Route exact path = "/register" element={<Register/>}></Route>
     
        <Route path ="/serviço/:id" element = {<Service/>}></Route>
        <Route path="/meusServiços" element={<MyServices/>}></Route>
        <Route path='/meusServiços/adicionarServiço' element={<AddService/>}></Route>
        
      </Routes>
    </Router>

      
    </>
  )
}

export default App
