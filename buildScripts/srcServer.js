//this file will configure a web server that will server requests on our web server
//using es6
import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();


//routing
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
