import React,{useState} from 'react'
import './Login.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login =()=>{ 
    const [userLogin ,setUserLogin] =useState({email:'',password:''})
   

    const inputhandler =(event)=>{
          const {name,value} =event.target
         setUserLogin((previousState)=>({
             ...previousState,
             [name]:value

         }))
         
    }
    const inputSubmitdata =(event)=>{
        event.preventDefault();
        axios
            .post('http://localhost:7300/api/v1/login',userLogin)
            .then((res)=>{
                if(res.status==200){
                    localStorage.setItem('toekn', JSON.stringify(res.data.token));
                    toast.success('login SucessFully')
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
        

    }
    return(
        <>
     
        	<div class="login">
            <div class=" login-key text-center">
                  <i class="fa-solid fa-key" aria-hidden="true"></i>
              </div>
			<h1>LOGIN</h1>
			<form onSubmit={inputSubmitdata}>
				<label for="email">
					<i class="fas fa-user"></i>
				</label>
				<input type="email" name="email" placeholder="email" id="email"  onChange={inputhandler} required autoComplete='off'/>
				<label for="password">
					<i class="fas fa-lock"></i>
				</label>
				<input type="password" name="password" placeholder="Password" onChange={inputhandler} id="password" required autoComplete='off'/>
				<input type="submit" value="Login"/>
			</form>
		</div>
        <ToastContainer />
        </>
    )
}

export default Login