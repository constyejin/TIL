const express = require('express');
const app = express();


app.listen(7000, function(){
  console.log('7000 포트!');
  // document.write = 'Main page'
});


app.get('/hello', function(requests, response){
  response.send('Hello World!');
})
