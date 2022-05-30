
import React,{ useRef } from 'react'
import './App.css';
import Bankdetails from './page/bankdetails'
import AddBankAccount from './page/AddBankAccount'
import Withdrawal from './page/withrwal';
import DespositAmout from './page/depositAmount';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Componet/Navbar';
import SearchBar from './Componet/SearchBar';
import TransAction from './page/tranactiom1';
import Sort from './page/sortedData'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
       <br/>

          <Routes>
               <Route path='/' element ={<SearchBar/>}/>
                <Route path ="/desposit" element={<DespositAmout/>}/>
                <Route path ='/withdrawal' element={<Withdrawal/>}/>
                <Route path ='/create' element={<AddBankAccount/>} />
                <Route path='/statement' element ={<TransAction/>} />
                <Route path ='/sortedData' element={<Sort/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
