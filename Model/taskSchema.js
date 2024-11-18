

const mongoose =require("mongoose")
const {Schema} =mongoose


const taskSchema = new Schema ({
name :{
    type:String,
    require :true
},
quantity :{
    type:Number,
    default :0
},
price:{
    type:Number,
    default :0
}

})

const Product = mongoose.model("task" , taskSchema)
module.exports = Product