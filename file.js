//reading files 

const fs = require('fs');
fs.readFile('./docs/hello.txt',(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})