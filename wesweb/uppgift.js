const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\index.html')

})
app.get('/css', (req, res) => {
  res.sendFile(__dirname + '\\css.css')
})
app.get('/img', (req, res) => {
  res.sendFile(__dirname + '\\1.png')
})
app.post('/', function (req, res) {
  res.json(req.body);
})

app.listen(port, () => console.log(`Example app listening on port port!`))