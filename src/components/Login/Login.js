import React, {useState, useEffect} from "react";
import './Login.css';
import { NavLink, Redirect } from "react-router-dom";

const Login = ({users, logOutUser, logInUser}) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    console.log(users.user.users.user)
    if(users.user.users.user){
        // <Redirect to='/' />
    }
    // console.log(logOutUser);
    return (!users.user.users.user) ? (
        <>

            <div className="div-container-login" action="action_page.php" >
                <div class="imgcontainer">
                    <img style={{width:'50px'}} src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" alt="Avatar" class="avatar" />
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input value={user} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required />

                    <button onClick={()=>logInUser(user,password)} >Login</button>
                  
                </div>

                <div class="container" >
                    <NavLink type="button" class="cancelbtn" to='/'>Inicio</NavLink>
                </div>
            </div>

        </>
        ):  (<Redirect to='/' />  )
}

export default Login;