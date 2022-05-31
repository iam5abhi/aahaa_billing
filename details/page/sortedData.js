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


const TransAction =()=>{
    const [AccountNumber,setAccountNumber] =useState('')
    const[userAccountDetails,setUserAccountDetails]=useState('')
    const [viewForm,setViewForm] =useState(false)
    const SearchHandler=(event)=>{
        event.preventDefault();
        axios.get(`http://localhost:7300/sort/?AccountNumber=${AccountNumber*1}`)
        .then(async(res)=>{
           if(res.status){
             setUserAccountDetails(res.data.userTransactionData)
             setViewForm(true)
           }
        })
        .catch(err=>{
          console.log(err.message)
        })
    }
     
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return(
        <>
              <Button variant="contained" color="success" style={{'margin-left':'1300px'}}  onClick={handlePrint}>
                 Print
               </Button>
           {!viewForm ?(
               <form onSubmit={SearchHandler}> 
                    <input type="text" placeholder="Search.." onChange={(event)=>setAccountNumber(event.target.value)} name="AccountNumber"/>
                    <button type="submit"><i classNmae="fa fa-search">Search</i></button>
            </form>)
            :(
           <TableContainer component={Paper} ref={componentRef}>
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
           {userAccountDetails.map((row,i) => (
             <TableRow
               key={i+1}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">
                 {row.Date}
               </TableCell>
               <TableCell className ='tablecell' align="left">{row.EffectiveDate}</TableCell>
               <TableCell className ='tablecell' align="left">{row.ChequeNumber}</TableCell>
               <TableCell className ='tablecell' align="left">{row.Branch}</TableCell>
               <TableCell className ='tablecell' align="left">{row.Description}</TableCell>
               <TableCell className ='tablecell' align="left">{row.WithdrawalAmount}</TableCell>
               <TableCell className ='tablecell' align="left">{row.DepositAmount}</TableCell>
               <TableCell className ='tablecell'     align="left">{row.Blance}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer> )
}
        </>
    )
}


export default TransAction