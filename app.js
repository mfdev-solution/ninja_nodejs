const express = require('express');


// express app

const app = express();

//listen for requests
//setting views 
app.set('views engine', 'ejs')


app.listen(3000);

app.get('/', (req,res) => {
    // res.send("<p>home page </p>");
    res.sendFile('./views/index.html',{root:__dirname})
})


app.get('/about', (req,res) => { 
    // res.send("<p>home page </p>");
    res.sendFile('./views/about.html',{root:__dirname})
})
app.use((req,res) =>{
    res.sendFile('./views/404.html',{root:__dirname})
})