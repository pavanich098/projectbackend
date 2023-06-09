const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const mongoose=require("mongoose")
const Content=require("./schema")
console.log(Content)
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://pavanich:pavanich@cluster0.px1mh6d.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("mongodb connect succesfully")
    })
    .catch((err)=>{
        console.log(err)
    })
app.get("/users",async(req,res)=>{
    await Content.find()
    .then(found=>res.json(found))
})
app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData=new Content({
        username,password
    })
    newData.save()

})



app.get("/",(req,res)=>{
    res.send("Dumby api to check weather it is working or not")
}) 
app.listen(5000,()=>console.log("server started successfully"))