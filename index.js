
const express = require('express');
const app = express();
const mysqlcon = require('mysql');
const config = require('./config/database');
const path = require ('path'); 



app.use(express.static(__dirname+ '/client/dist/'))
app.get('*', function(req, res){
    res.sendfile(path.join(__dirname + '/client/dist/index.html'));
  // res.send('test')
  });
  
  app.listen(8080, () => {
      console.log('listening')
  }); 