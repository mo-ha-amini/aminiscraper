const express = require('express');
const dotenv= require('dotenv')
const path = require('path')
const app = express();

app.use(express.json());

dotenv.config({ path:'config/config.env' })

//import all router  
const jobs = require('./Routes/job');

if(process.env.NODE_ENV==='PRODUCTION'){
    app.use(express.static(path.join(__dirname,'./Client/build')))

    app.get('/',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'./Client/build/index.html'))
    })
}

app.use(jobs)

module.exports= app;