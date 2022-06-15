const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express()
const port = 3000

console.log(__dirname)
app.set('views', path.join(__dirname, 'views')); //path join agar bisa kebaca pathnya di manapun
app.set('view engine', 'ejs');

app.get('/', (req, res) => { // get dan post adalah method untuk mengirim suatu web
  res.send('Hello World!')
})

app.get('/add', (req,res){

})

app.post('/add', (req, res)=>{
    
})

app.listen(port, () => { // app listen itu untuk menentukan port
  console.log(`Example app listening on port ${port}`)
})

