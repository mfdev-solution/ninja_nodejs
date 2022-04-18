const express = require('express');


// express app

const app = express();

//listen for requests
//setting views 
app.set('view engine', 'ejs')


app.listen(3000);

app.get('/', (req,res) => {
    // res.send("<p>home page </p>");
    res.render('index',{title:"home"});
    // res.sendFile('./views/index.html',{root:__dirname})
})


app.get('/about', (req,res) => { 
    res.render('about',{title:"about"});
    // res.send("<p>home page </p>");
    // res.sendFile('./views/about.html',{root:__dirname})
})
app.get('/blogs/create',(req,res) =>{
    res.render('create',{title:"create a new blog"});
} )
app.use((req,res) =>{
    res.status(404).render('404',{title:"404"});
    // res.sendFile('./views/404.html',{root:__dirname})
})