import React,{useState} from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import axios from "axios";



const SearchBar =()=>{
       const [AccountNumber, setAccountNumber] = useState('')
       const[accontdetails,setAccountDetails] =useState('')
       const [Viewform,setViewform] =useState(false)
       const SeachHandler =(event)=>{
          event.preventDefault();
          axios.get(`http://localhost:7300/transaction/?AccountNumber=${AccountNumber*1}`)
          .then(async(res)=>{
              if(res.status){
                const data =await res.data.doc
                setAccountDetails(data)
                setViewform(true)
                localStorage.setItem('AccountNumber',data.AccountNumber)
                localStorage.setItem('name',data.name)
              }
          })
          .catch(err=>{
              console.log(err.message)
          })
       }
       console.log(accontdetails)
    return(
        <>
         { !Viewform ?( <form  onSubmit={SeachHandler}>
               <input type="text" placeholder="Search.." onChange={(event)=>setAccountNumber(event.target.value)} name="AccountNumber"/>
               <button type="submit"><i class="fa fa-search"></i></button>
            </form>
         ):(
             <div>
            <form  onSubmit={SeachHandler}>
            <input type="text" placeholder="Search.." onChange={(event)=>setAccountNumber(event.target.value)} name="AccountNumber"/>
            <button type="submit"><i class="fa fa-search"></i></button>
         </form>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">AccountNumber</th>
      <th scope="col">Address</th>
      <th scope="col" >desposit</th>
      <th>withdrawal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{accontdetails._id}</th>
      <td>{accontdetails.name}</td>
      <td>{accontdetails.AccountNumber}</td>
      <td>{accontdetails.Address}</td>
      <td><Button variant="contained" type="submit"><Link to='/desposit'>Deposit</Link></Button></td>
      <td><Button variant="contained" type="submit"><Link to='/withdrawal'>Withdrawal</Link></Button></td>
    </tr>
  </tbody>
</table>
</div>
         )
}
        </>
    )
}


export default SearchBar