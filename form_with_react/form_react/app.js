import express from "express"
import collection  from "./mongo.js";
import cors from "cors"
const App = express();
App.use(express.json());
App.use(cors());

App.get("/",cors(),(req,res)=>{

})


App.post("/",async(req,res)=>{
    const {email,password} = req.body

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }else{
            res.json("notexist")
        }
        
    }
    catch(e){
        console.log(e);
        res.json("notexist")
    }
})


App.post("/signup",async(req,res)=>{
    const {email,password} = req.params.body
    const data ={
        email:email,
        password:password
    }
    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }else{
            res.json("notexist")
            await collection.insertMany([data])
        }
        
    }
    catch(e){
        res.json("notexist")
    }
})


App.listen(8000,()=>{
    console.log("port connected");
})