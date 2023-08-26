const express = require('express');
const app = express();


app.listen(7000, function(){
  console.log('7000 포트!');
  // document.querySelector('body').innerHTML = '<h1>hello</h1>';
});


app.get('/', function(requests, response){
  response.send('Hello World!!!');
})
