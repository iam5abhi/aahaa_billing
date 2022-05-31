import React from 'react'
import './login.css'


const Login =()=>{
    return(
        <>
     
        	<div class="login">
            <div class=" login-key text-center">
                  <i class="fa-solid fa-key" aria-hidden="true"></i>
              </div>
			<h1>LOGIN</h1>
			<form action="/auth" method="post">
				<label for="username">

					<i class="fas fa-user"></i>
				</label>
				<input type="text" name="username" placeholder="Username" id="username" required/>
				<label for="password">
					<i class="fas fa-lock"></i>
				</label>
				<input type="password" name="password" placeholder="Password" id="password" required/>
				<input type="submit" value="Login"/>
			</form>
		</div>
		
    



        </>
    )
}

export default Login