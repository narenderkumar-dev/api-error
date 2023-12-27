const mongoose = require("mongoose")
const mondbUrl="mongodb+srv://mobile-shop:UVeehCAiFFhwiLMN@cluster0.t41t0ga.mongodb.net/?retryWrites=true&w=majority"
const connectdb=()=>{
    return mongoose.connect(mondbUrl);
}
module.exports={connectdb}