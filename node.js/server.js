const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(8080, () => {
  console.log('8080')
})

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})


app.get('/news', (request, response) => {
  response.send('News Page')
})
