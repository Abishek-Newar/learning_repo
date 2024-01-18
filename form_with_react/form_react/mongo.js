import mongoose from "mongoose";
mongoose.connect("mongodb+srv://Abishek_Newar:Abishek2002@cluster0.kkrveku.mongodb.net/form-login")
.then(()=>{
    console.log("mongoDB connected");
})
.catch(()=>{
    console.log("failed");
})


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

export default collection;