
const mongoose = require("mongoose")

function dataconnet() {
    mongoose.connect("mongodb+srv://crud:crud123@crud.4akof.mongodb.net/crud?retryWrites=true&w=majority&appName=crud").then(()=>{
        console.log("database connected");
        
    }).catch((error)=>{
        console.log(error);
        
    })
  
}
module.exports = dataconnet;
