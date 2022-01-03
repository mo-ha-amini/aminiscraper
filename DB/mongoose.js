const mongoose = require("mongoose");
const dotenv= require('dotenv')
const path = require('path')
const chalk = require('chalk')

//setting up config file 
dotenv.config({ path:'config/config.env' })

mongoose.connect("mongodb+srv://Hami:Mohammad1379@cluster0.oaiep.mongodb.net/ScrapingUni?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});
console.log(chalk.magenta('Connect to DataBase'))
