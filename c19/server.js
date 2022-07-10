const http = require('http')
const fs = require('fs')
const content = fs.readFileSync('contoh.html', 'utf-8')

http.createServer(function(req, res) {
    //ini header, yaitu isi surat yang akan dikirimkan ke browser
    //status code, 200 = lancar
    res.writeHead(200, {"content-type": "text/html"}) //key kalo ada strip pake tanda kutip
    
    //ini body (kontennya)
    res.end(content)
}).listen(3000) //ini adalah port