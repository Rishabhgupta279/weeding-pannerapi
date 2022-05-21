const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({

profile:{
    type:String,
    
},
fname:{
    type:String,
    
},
work:{
    type:String,
    
},
image:{
    type:String,
    
},
 rating:{
    type:String,
    
 },
 price:{ type:String,
    
 },
location:{
    type:String,
},
email:{
    type:String,
},
phone:{
    type:String,
},



});


 module.exports=mongoose.model("Vendor",productSchema);
