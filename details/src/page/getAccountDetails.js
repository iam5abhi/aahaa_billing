import React from 'react'
import './getAccountDetails.css'



const GetAccountDetails =()=>{
    return(
        <>
           <div className="container-fluid">
                <div className='row'>
                     <div class="col-6 border border-dark" >
                     <div class="p-2 d-flex">
                                        <div className='col-3'><b>Name</b></div>   
                                        <div className='col-9'><b>************</b></div>         
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'><b>Address</b></div>
                                        <div className='col-9'><b>************</b></div>
                                </div>
                     </div>
                        <div class="col-6" >
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Name</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Branch</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Account number</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>IFSC</div>
                                        <div className='col-9'>************</div>
                                </div>
                                <div class="p-2 d-flex">
                                        <div className='col-3'>Address</div>
                                        <div className='col-9'>************</div>
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
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
   
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    
    </tr>
  </tbody>
</table>


        </>
    )
}

export default GetAccountDetails