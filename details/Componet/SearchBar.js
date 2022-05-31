import React,{useState} from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import axios from "axios";
import './searchbar.css'

const SearchBar =()=>{
  return(
      <>     
        <div class="container">
    <div class="input-group">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary bg-dark">search</button>      
      </div>
      </div>  
      <br></br>

  <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table table-bordered text-center bg-light">
              <thead class="thead bg-dark text-white">
                <tr>
                  <th scope="col">Sr.no.</th>
                  <th scope="col">Account number</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td scope="row">************</td>
                
                  <td>
                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
                  
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>

        
        
 
      </>
  )
}

export default SearchBar