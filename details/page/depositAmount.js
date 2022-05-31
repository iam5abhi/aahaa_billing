import React,{useState,useEffect} from "react";
import './add.css'
import Button from '@mui/material/Button';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate,Link} from 'react-router-dom'


const DespositAmout =()=>{
  const[dipositAmount,setDipositAmount] =useState({Date:'',Branch:'',Description:'',DepositAmount:''})

     let navigate = useNavigate();

   const DataHandler =(event)=>{
       const {name,value} =event.target
       setDipositAmount((preState)=>({
         ...preState,
         [name]:value
       }))
   }

  
 
   const AccountNumber = localStorage.getItem('AccountNumber')  
   const name =localStorage.getItem('name')

const submitHandler =async(event)=>{
     event.preventDefault();
     axios.patch(`http://localhost:7300/deposit/?AccountNumber=${AccountNumber*1}`,dipositAmount)
     .then((res)=>{
         if(res.status==200){
             localStorage.removeItem('AccountNumber')
             localStorage.removeItem('name')
         }
         toast.success('desposit Sucessfully')
         navigate("/")
     })
     .catch((err)=>{
         toast.error(err.message)
     })
}
console.log(dipositAmount)
    return(
      <>
            <div class="row">
              <div class="container">
                <form onSubmit={submitHandler}>
                  
                    <label for="date">Date</label>
                      <input type="date" id="date" name="Date"  onChange={DataHandler} placeholder="Choose date"/><br/><br/>
                      <label for="accno"> AccountNumber</label>
                      <input type="text" id="accno" name="AccountNumber"    placeholder="Enter account number" value={AccountNumber} disabled='true'/>

                      <label for="name">Name</label>
                      <input type="text" id="name" name="name"    placeholder="Enter account name" value={name} disabled='true'/>
                      <label for="branch"> Branch</label>
                      <input type="text" id="branch" name="Branch" onChange={DataHandler} placeholder="Enter Branch"/>
        
                      <label for="description"> Description</label>
                      <input type="text" id="description" name="Description" onChange={DataHandler} placeholder="Add description"/>
        
                      <label for="dammount">Deposite Ammount</label>
                      <input type="text" id="dammount" name="DepositAmount" onChange={DataHandler} placeholder="Enter Despositing Ammount"/>
        
        
                      <Button type ='submit' variant="contained">Deposit</Button>
                
                </form>
              </div>
              <ToastContainer />
            </div>
           
      </>
    )
 }

export default DespositAmout