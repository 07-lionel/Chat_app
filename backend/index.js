const express =require('express')
const cors =require('cors')
const mongoose =require('mongoose')

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors)
const router = express.Router();
mongoose.connect("mongodb://localhost:30000/mychat",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const  userSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User= new mongoose.model("User",userSchema)

app.post("/Login",(req,res)=>{
    const {email,password}=req.body;
    User.findone({email:email},(err,user)=>{
        if(user){
            if(password==user.password){
                res.send({message:"login sucess",user:user})
        
            }
            else {
                res.send({message:"wrong credentials"})
            }
        }
        else{
            res.send("not register")
        }
    })
})

router.get("/Register",(req,res)=>{
    console.log(req.body)
    const {name,email,password}=req.body;
    User.findone({email:email},(err,user)=>{khlhihio
        if(user){
            res.send({message:"user already exit"})
        }
        else{
            const user =new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
})

app.listen(6969,()=>{
    console.log("started")
})