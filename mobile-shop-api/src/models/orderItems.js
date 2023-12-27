const mongoose=require("mongoose");
const {Schema}=mongoose;
const orderItemSchema = new mongoose.Schema({

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    size:{
        type:string,
        
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    
})

const OrderItem=mongoose.model("orderItems",orderItemSchema);
module.exports=OrderItem;