const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 9000

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.status(200)
    .send('Hello world!')
})

app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('Post to /test!')
})

app.listen(port, (err) => {
  if(err) {
    console.error('Server open failed!')
    console.error(err)
  } else {
    console.log('Magic happen on port ' + port)
  }
})