
import React,{useEffect,useState} from 'react';
 import './getAccountDetails.css'
 import axios from 'axios'




const GetAccountDetails = () => {
        const[Accountdetail,setAccountNumberdetail] =useState('')
        const [getTransaction,setGetTransaction] =useState('')
        const acountData =(event)=>{
                axios
                   .get('http://localhost:7300/transaction/?AccountNumber=11812151002514')
                   .then((res)=>{
                        if(res.status==200){
                           setAccountNumberdetail(res.data.doc)
                          setGetTransaction(res.data.doc.transaction.transction)
                        }
                     }) 
                   .catch((err)=>{
                        console.log(err.message)
                        })
            }

        useEffect(() => {
                document.title ="tranaction"
                acountData()
        }, [])

        return (
                <>   
              <div className="container-fluid">
                <div className='row'>
                     <div class="col-6 border border-dark bg-light" >
                     <div class="p-2 d-flex">
                                        <div className='col-3'><b>Name</b></div>   
                                        <div className='col-9'><b>{Accountdetail.name}</b></div>         
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'><b>Address</b></div>
                                        <div className='col-9'><b>{Accountdetail.Address}</b></div>
                                </div>
                     </div>
                        <div class="col-6" >
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Branch of Ownership :</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Branch Phone Number</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Email Addres</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Branch Id:</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Branch Address:</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>IFSC:</div>
                                        <div className='col-9'>{Accountdetail.IFSC}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Branch MICR Code:</div>
                                        <div className='col-9'>{Accountdetail.Branch_MICR_Code}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Branch GSTIN:</div>
                                        <div className='col-9'>{Accountdetail.Branch_GSTIN}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Contact Number:</div>
                                        <div className='col-9'>{Accountdetail.Customer_Number}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Account Number:</div>
                                        <div className='col-9'>{Accountdetail.AccountNumber}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Product Type:</div>
                                        <div className='col-9'>{Accountdetail.ProductType}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Account Type:</div>
                                        <div className='col-9'>{Accountdetail.AccountType}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>MAB/QAB Requirement:</div>
                                        <div className='col-9'>{Accountdetail.AccountOpenBlance}</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Nominee Registration :</div>
                                        <div className='col-9'>No</div>
                                </div>
                     </div>
                </div>
           </div>
           <br></br>
           <br></br>
<h6 class="text-center"><b>Statement of Account</b></h6><br></br>

<div class="row">
    <div class="col-6" ><b>From:-</b>08-06-2022</div>
    <div class="col-6 " ><b>To:-</b>08-06-2022</div>
</div>
           
  <table class="table table-striped">
  <thead class="thead bg-dark text-white">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Effective Date</th>
      <th scope="col">Cheque/Sequence Number</th>
      <th scope="col">Branch</th>
      <th scope="col">Description</th>
      <th scope="col">Withdrawal Amount</th>
      <th scope="col">Deposit Amount</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    
      {getTransaction.map((row,id)=>{
            
           return(
               <tr>
                    <td>{row.Date}</td> 
                    <td>{row.EffectiveDate}</td>
                    <td>{row.ChequeNumber}</td>
                    <td>{row.Branch}</td>
                    <td>{row.Description}</td>
                    <td>{row.WithdrawalAmount}</td>
                    <td>{row.DepositAmount}</td>
                    <td>{row.Blance}</td>
               </tr>
           )
      })}
  </tbody>
</table>

                     
                </>
        );
};



export default GetAccountDetails;