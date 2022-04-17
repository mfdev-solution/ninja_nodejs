//reading files 

const fs = require('fs');
fs.readFile('./docs/hello.txt',(err,data) =>{
    if(err){
        console.log(err);
    }
     console.log(data.toString());
})

//writing files 
fs.writeFile('./docs/blog1.txt' , "hello world",()=>{
    console.log('file was writen')
})

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder created')
    })
}