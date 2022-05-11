const express = require('express');
const { render } = require('express/lib/response');
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
app.use(express.urlencoded({extended:true}))

//mongoose and sandbox routes
app.get('/add-blog' ,(req, res)=>{
    const blog = new Blog({
        title:'new Blog',
        snippet:"about my new blog",
        body:"more about my new blog"
    })
    blog.save()
});
app.get('/blogs',(req,res)=>{
    Blog.find()
        .then((resutl)=>{
            res.render('blogs',{title:'Blogs',blogs:resutl})
            })
    // const Blogs = Blog.find({})
    // console.log(Blogs);
    // res.render('index',{title:'blogs',blogs:Blogs})
});
app.get('/single-blog',(req,res)=>{
    Blog.findById('6260e7ed78b4e7d84cf564d5')
    .then((result)=>{
        res.render('blog',{title:result.title,blog:result});
    })
});

    
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
    } );
    app.post('/blogs',(req,res)=>{ 
        const blogs = new Blog(req.body);
        blogs.save()
        .then((result) =>{
            res.redirect('/blogs');
        })
        
    })
    app.get('/blogs/:id',(req,res) =>{
        const id = req.params.id;
        Blog.findById(id)
        .then((result)=>{
            res.render('blog',{title:result.title,blog:result});
        })
    });
app.delete('/blogs/:id', (req , res ) =>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/blogs'});
    })
} )
app.use((req,res) =>{
    res.status(404).render('404',{title:"404"});
    // res.sendFile('./views/404.html',{root:__dirname})
})