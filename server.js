const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.listen(12345)
app.use((req, res)=>{
        console.log(req.headers);
        console.log(req.protocol);
        console.log(req.body);
        console.log(req.query);
})

