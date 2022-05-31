import React,{useState} from "react";
import './add.css'
import Button from '@mui/material/Button';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate,Link} from 'react-router-dom'



const Withdrawal =()=>{
     const [withdrawalamonut,setwithdrawalamonut] =useState({Date:'',Branch:'',ChequeNumber:'',Description:'',WithdrawalAmount:''})
      
     let navigate = useNavigate();
    const inputHandler =(event)=>{
      const {name,value} =event.target
      setwithdrawalamonut((preState)=>({
        ...preState,
        [name]:value
      }))
    }

     const AccountNumber = localStorage.getItem('AccountNumber')  
     const name =localStorage.getItem('name')
     const withdrwalAmount =(event)=>{
          event.preventDefault();
          axios.patch(`http://localhost:7300/withdrawal/?AccountNumber=${AccountNumber*1}`,withdrawalamonut)
          .then((res)=>{
              if(res.status==200){
                  localStorage.removeItem('AccountNumber')
                  localStorage.removeItem('name')
              }
              toast.success('Amount deduct sucessfully')
              navigate("/")
          })
          .catch((err)=>{
               toast.error(err.message)
          })
     }
    return(
        <div class="row">
        <div class="container">
          <form  onSubmit={withdrwalAmount} >    
               
              <label for="date">Date</label>
                <input type="date" id="date" name="Date" onChange={inputHandler}  placeholder="Choose date"/><br/><br/>
                
                <label for="accno"> AccountNumber</label>
                <input type="text" id="accno" name="AccountNumber"    placeholder="Enter account number" value={AccountNumber} disabled='true'/>

                <label for="name">Name</label>
                <input type="text" id="name" name="name"    placeholder="Enter account name" value={name} disabled='true'/>

                <label for="branch"> Branch</label>
                <input type="text" id="branch" name="Branch" onChange={inputHandler} placeholder="Enter Branch"/>
    
               <label for="chequenum"> Cheque number</label>
                <input type="text" id="chequenum" name="ChequeNumber" onChange={inputHandler} placeholder="Cheque number"/>
    
                <label for="description"> Description</label>
                <input type="text" id="description" name="Description" onChange={inputHandler} placeholder="Add description"/>
    
                <label for="wammount">Withdrawal Ammount</label>
                <input type="text" id="wammount" name="WithdrawalAmount" onChange={inputHandler} placeholder="Withdrawal Ammount"/>
                <Button type="submit" variant="contained">withdrwal</Button>  
            
          </form>
        </div>
        <ToastContainer />
        </div>
    )
}



export default Withdrawal