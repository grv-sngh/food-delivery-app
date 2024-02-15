import express from 'express'
import { default as mongoose } from 'mongoose'
import { Food } from './models/db.js'
const app = express()
const PORT = 5000
const mongodbURL = "mongodb+srv://root:root@cluster0.lsejrc8.mongodb.net/foodapp?retryWrites=true&w=majority"

app.get("/", async (req, res) => {
    
    const data = await Food.find({});
    
    return res.json(
       { 
        data : data
       }
    )
})

mongoose
    .connect(mongodbURL)
    .then(async () => {
        app.listen(PORT, async () => {
            console.log("App is running")
        })
    })
