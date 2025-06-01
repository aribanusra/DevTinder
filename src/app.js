const express = require ('express')
const app = express();
app.use('/', (req,res)=>{
res.send("hello from dashboard")
})
app.listen (7777 , ()=>{
console.log("port 7777")
})