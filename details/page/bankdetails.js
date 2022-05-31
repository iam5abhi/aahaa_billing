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





 const Bankdetails =()=>{
    const [AccountNumber,setAccountNumber] =useState('')
     const[userAccountDetails,setUserAccountDetails]=useState('')
     const SearchHandler=(event)=>{
         event.preventDefault();
         axios.get(`http://localhost:7300/transaction/?AccountNumber=${AccountNumber*1}`)
         .then(async(res)=>{
            if(res.status){
              setUserAccountDetails(res.data.doc)
            }
         })
         .catch(err=>{
           console.log(err.message)
         })
     }
  console.log(userAccountDetails.transaction.transction,"viikkkkk")
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
     return (
         <div >
                <br/>
               <Button variant="contained" color="success" style={{'margin-left':'1300px'}}  onClick={handlePrint}>
                 Print
               </Button>
             <br/><br/>
             <form onSubmit={SearchHandler}> 
               <input type="text" placeholder="Search.." onChange={(event)=>setAccountNumber(event.target.value)} name="AccountNumber"/>
               <button type="submit"><i classNmae="fa fa-search"></i></button>
            </form>
     {/* <TableContainer component={Paper} ref={componentRef}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
           <TableRow className="tableRow">
             <TableCell className ='tablecell'  align ="left">Date</TableCell>
             <TableCell  className ='tablecell' align="left">Effective<br/>Date</TableCell>    
             <TableCell className ='tablecell'  align="left">Cheque/SequenceNumber </TableCell>
             <TableCell className ='tablecell' align="left">Branch</TableCell>
             <TableCell className ='tablecell' align="left">Description</TableCell>
             <TableCell className ='tablecell'  align="left">Withdrawal<br/>Amt.</TableCell>
             <TableCell className ='tablecell' align="left">Deposit Amt</TableCell>
             <TableCell className ='tablecell' align="left">Balance</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {userAccountDetails.transaction.transction.map((row) => (
             <TableRow
               key={row.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">
                 {row.date}
               </TableCell>
               <TableCell className ='tablecell' align="left">{row.effective_date}</TableCell>
               <TableCell className ='tablecell' align="left">{row.cheque_ref}</TableCell>
               <TableCell className ='tablecell' align="left">{row.branch}</TableCell>
               <TableCell className ='tablecell' align="left">{row.description}</TableCell>
               <TableCell className ='tablecell' align="left">{row.withdrawalamout}</TableCell>
               <TableCell className ='tablecell' align="left">{row.despositamout}</TableCell>
               <TableCell className ='tablecell'     align="left">{row.blance}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>  */}
     </div>
     ) 
 }



 export default Bankdetails
