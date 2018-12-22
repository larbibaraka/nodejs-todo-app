var express = require('express');

//require the controller
var todoController = require('./controllers/todoController');


var app = express();
//set the template engine
app.set('view engine' , 'ejs');
//set the assets folder
app.use(express.static('./public'));
//the welecome page
app.get('/',function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

//fire the controller
todoController(app);

app.listen('3000');