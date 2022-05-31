import React,{useRef,useState} from 'react';
 import Table from '@mui/material/Table';
 import TableBody from '@mui/material/TableBody';
 import TableCell from '@mui/material/TableCell';
 import TableContainer from '@mui/material/TableContainer';
 import TableHead from '@mui/material/TableHead';
 import TableRow from '@mui/material/TableRow';
 import Paper from '@mui/material/Paper';
 import './index.css'
 import { useReactToPrint } from "react-to-print";
 import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";
// import './tl.css'


const TransAction =()=>{
    const [AccountNumber,setAccountNumber] =useState('')
    const[userAccountDetails,setUserAccountDetails]=useState('')
    const [viewForm,setViewForm] =useState(false)
    const SearchHandler=(event)=>{
        console.log("hello")
        event.preventDefault();
        axios.get(`http://localhost:7300/transaction/?AccountNumber=${AccountNumber*1}`)
        .then(async(res)=>{
           if(res.status){
             console.log(res.data.doc)
             setUserAccountDetails(res.data.doc.transaction.transction)
             setViewForm(true)
           }
        })
        .catch(err=>{
          console.log(err.message)
        })
    }
    //   console.log(userAccountDetails)
    //  const data =userAccountDetails.sort((a,b)=>{return b.Date-a.date})
    //  console.log(data)
     
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return(
        <>
           <Button variant="contained" color="success" style={{'margin-left':'1300px'}}  onClick={handlePrint}>
                 Print 
               </Button>
                 <br/>
                 <br/>
              
                 <div class="container">
                  <div class="row">
                    <div class="column-left">
                       <div class="container"></div>
                    </div>
                    <div class="column-right">
                    <div class="container">
                        <div class="row">
                            <div className='column-one'>
                              <p>Name</p>
                              <p>Branch</p>
                            </div>

                            <div className='column-two'>
                              <p>**</p>
                              <p>*********</p>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
</div>
  
  

        </>
    )
}


export default TransAction