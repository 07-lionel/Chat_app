const express =require('express')
const cors =require('cors')
const mongoose =require('mongoose')

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://localhost:30000/mychat");

const  userSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserForm= new mongoose.model("User",userSchema)

app.post("/login",(req,res)=>{
    const {email,password}=req.body;

    UserForm.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
    .catch(err=>res.json(err))

})

app.post("/register",(req,res)=>{
    const {name,email,password}=req.body;

    UserForm.findOne({email:email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else {
            UserForm.create(req.body)
            .then(result=>res.json(result))
            .catch(err=>res.json(err))
        }
    })
})

app.listen(6969, () => {
    console.log("Server listining on http://127.0.0.1:6969");

});