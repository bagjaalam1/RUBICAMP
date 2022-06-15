const http = require('http')
const fs = require('fs')
const content = fs.readFileSync('path file', 'utf-8')

http.createServer(function(req, res){
    res.writeHead(200, {"content-key": "text/plain"})// status code : 200 itu lancar
    res.end("<h1> belajar bikin webbbbb</h1>") 
}).listen(3000) // port pakai number, layanan port untuk web (3000)





