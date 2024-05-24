const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
app.use((cors()))
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port=process.env.port

//schemas
const arrivalsSchema=new mongoose.Schema({
    imageSrc:String,
    title:String,
    price:Number
},{timestamps:true})

//model
const arrivalsModel=mongoose.model(('Arrivals'),arrivalsSchema)

//CRUD
app.get('/api/arrivals',async(req,res)=>{
    const arrival= await arrivalsModel.find()
    if(arrival){
        res.send({
            message:'success',
            data:arrival
        })
    }else{
        res.send({
            message:"not found",
            data:null
        })
    }
})

app.get('/api/arrivals/:id',async(req,res)=>{
    const {id}=req.params
    let arrival
    try {
        arrival=await arrivalsModel.findById(id)
    } catch (error) {
        error:error
    }
    if (arrival) {
        res.send({
            message:'success',
            data:arrival
        })
    } else {
        res.send({
            message:'not found',
            data:null
        })
    }
})

app.post('/api/arrivals',async(req,res)=>{
    const arrival= new arrivalsModel(req.body)
    await arrival.save()
    res.send({
        message:'success',
        data:arrival
    })
})

app.delete('/api/arrivals/:id',async(req,res)=>{
    const {id}=req.params
    let arrival
    try {
        arrival=await arrivalsModel.findByIdAndDelete(id)
    } catch (error) {
        error:error
    }
    if (arrival) {
        res.send({
            message:'success',
            data:arrival
        })
    } else {
        res.send({
            message:'not found',
            data:null
        })
    }
})

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log('Connected!')
})

app.listen(port, () => { 
    console.log(`Server running on port ${port}.`) 
})
