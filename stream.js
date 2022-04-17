const fs = require('fs');

const readStrem = fs.createReadStream('./docs/blog3.txt')
const writeStrem = fs.createWriteStream('./docs/blog4.txt')

readStrem.on('data',(chnck) =>{
    console.log(('---------------------------------new chunck'));
    // console.log(chnck.toString())
    writeStrem.write("\n NEW Chunck\n")
    writeStrem.write(chnck)
})