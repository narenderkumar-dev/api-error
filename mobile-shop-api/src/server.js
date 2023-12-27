const app = require(".");
const {connectdb}=require("./config/db")
const PORT=5454;
app.listen(PORT, async()=>{
    await connectdb();
    console.log("ecommerce api listing on PORT : ",PORT);
})