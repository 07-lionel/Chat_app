import React,{useState} from 'react'
import axios from 'axios'
const url = process.env.apiURL;
const Register=()=>{
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const handlechange=e=>{
        const {name,value} =e.target
        setUser({...user,[name]:value})
    }

    const egister =()=>{
        const {name,email,password}=user
        if(name&& email && password){
            alert(user.email)
            axios.post(`http://localhost:6969/Register`,user)
            .then(res=>console.log(res))
        }
        else {
            alert("invalid input")
        }
    }
    return(
        <>    
        <div class="register">
            <div class="text_title_register text_title_login">
                Create a new account
            </div>
            <span class="">
                Already have an account ?
                <a href="/Login" target="" class="link">
                    Sign in
                </a>
            </span>
            <div class="p-6 mt-8">
                <form action="#">
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-pseudo" class=" input_register" name="name" value={user.name} onChange={handlechange} placeholder="FullName"/>
                        </div>
                    </div>
                    <div class="flex gap-4 mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-first-name" class=" input_register" name="email" value={user.email} onChange={handlechange} placeholder="Email"/>
                         </div>
                    </div>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input type="password" id="create-account-email" class="input_register " name="password" value={user.password} onChange={handlechange}  placeholder="password"/>
                        </div>
                    </div>
                    <div class="flex w-full my-4">
                        <button type="submit" class="button_border" onClick={egister} >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Register