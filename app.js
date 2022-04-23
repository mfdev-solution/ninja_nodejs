const express = require('express');
const mongoose = require('mongoose')
const Blog = require('./models/blogs');
// express app

const app = express();

//listen for requests
//setting views 
app.set('view engine', 'ejs')

//connect to mongodb
const URIDB = 'mongodb+srv://mfdev:fall1999m@cluster0.dtefj.mongodb.net/note-tuts?retryWrites=true&w=majority'
// const URIDB = 'mongodb+srv://mfdev:<password>@mycluster.hv2m1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect('mongodb://localhost/my_database')
.then((result) =>  app.listen(3000))
.catch((err)=>console.log(err));
// static files 
app.use(express.static('public'))

//mongoose and sandbox routes
app.get('/add-blog' ,(req, res)=>{
    const blog = new Blog({
        title:'new Blog',
        snippet:"about my new blog",
        body:"more about my new blog"
    })
    blog.save()
})
app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((resutl)=>{
            res.render('blogs',{title:'Blogs',blogs:resutl})
            })
    // const Blogs = Blog.find({})
    // console.log(Blogs);
    // res.render('index',{title:'blogs',blogs:Blogs})
})

//an example of midlware
// app.use((req, res,next)=>{
//     console.log("new request made : ");
//     console.log('host',req.hostname);
//     console.log('paht',req.path);
//     console.log('method',req.method);
//     next();
// })

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