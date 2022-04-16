const express= require('express')
const cors=require('cors')
const router=require('./router')
// parsing-body
const bodyParser=require('body-parser')

const app= express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())
app.use('/api',router)


app.listen(3001,()=>{
    console.log("server running at: http://127.0.0.1:3001/api");
})