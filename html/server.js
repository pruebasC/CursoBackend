const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use('/public',express.static('assets',{
  eTag: false,
  maxAge: '5h'
}));

app.get('/', function(req,res){
  //res.sendFile('index.html',{
    //root: __dirname
  //});
  res.render('index');
});


app.listen(3000);
