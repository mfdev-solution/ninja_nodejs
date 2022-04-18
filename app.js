const express = require('express');


// express app

const app = express();

//listen for requests
//setting views 
app.set('view engine', 'ejs')

// static files 
app.use(express.static('public'))
app.listen(3000);

//an example of midlware
app.use((req, res,next)=>{
    console.log("new request made : ");
    console.log('host',req.hostname);
    console.log('paht',req.path);
    console.log('method',req.method);
    next();
})

app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  }
);


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