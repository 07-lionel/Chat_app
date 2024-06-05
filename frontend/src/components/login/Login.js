import axios from 'axios'
import React ,{useState} from 'react'
import userimg from '../../img/logo.png'
const Login = () =>{
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value}) 
    }
    const login =()=>{
        axios.post('http:/localhost:6969/Login',user)
        .then(res=>{
            alert(res.data.message)
        })
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
                    <div class="">
                        <input type="text" id="sign-in-email" class=" input_register" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>
                    </div>
                   <div class="">
                        <input type="password" id="sign-in-email" class="input_register " name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
                   </div>
                   <div class="">
                       <div class="">
                           <a href="#" class="link">
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
               <a href="/Register" target="" class="link" >
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