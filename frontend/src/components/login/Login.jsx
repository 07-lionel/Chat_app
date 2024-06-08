import axios from 'axios'
import React ,{useState} from 'react'
import userimg from '../../img/logo.png'
import {useNavigate} from 'react-router-dom'

const Login = () =>{

    const navigate=useNavigate()

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value}) 
    }
    const login =(event)=>{
        event.preventDefault();

        axios.post( 'http://localhost:6969/login',user,{ timeout: 5000 })
        .then(result=>{
            if(result.data === "Success"){
                alert('Correct!')
                navigate('/home')
            }
            else if(result.data === "Wrong password"){
                alert('Incorrect password! Please try again.');
            }
            else if(result.data === "No records found!"){
                alert('no user')
            }
        })
        .catch(err=>alert(err))
    }
    return(
        <>
        <div class="register">
            <div class="text_title_login">
                Login To Your Account
            </div>
            <div>
                <img class='img_logo' src={userimg} alt=""/>
            </div>
            <div>
                <form action="#" autoComplete="off">
                    <div>
                        <input type="text" class=" input_register" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>
                    </div>
                   <div>
                        <input type="password" class="input_register " name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
                   </div>
                   <div>
                       <div>
                           <a href="/">
                               Forgot Your Password?
                           </a>
                       </div>
                   </div>
                   <div class="flex w-full">
                       <button type="submit" class="button_border " onClick={login}>
                           Login
                       </button>
                   </div>
               </form>
           </div>
           <div class="flex items-center justify-center mt-6">
               <a href="/register" target="" class="link" >
                   <span class="ml-2">
                       You don&#x27;t have an account?
                   </span>
               </a>
           </div>
       </div>
        </>
    )
}
export default Login