/*some dummy data
var data = [
  {item : "finish mongodb"},
  {item : "drink some water"},
  {item : "call some one :)"}
]*/
//require mongoose
var mongoose = require('mongoose');
//connect
mongoose.connect('mongodb://larbi:larbi2016@ds141674.mlab.com:41674/todos');
//create a schema
var todoSchema = new mongoose.Schema({
  item : String
})

var Todo = mongoose.model('Todo' , todoSchema);

var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended : false});

module.exports = function (app) {
  
  
  app.get('/todo' , function (req , res) {
        Todo.find({}, function(err, data){
          if(err) throw err;
             res.render('todo', {todo : data})
        })
     
  })

  app.post('/todo' , urlEncodedParser, function(req, res){
      console.log(req.body)
    //if(req.body.length !== 0){
      var item = Todo(req.body).save(function(err , data){
          if(err) throw err;
          res.json(data);
      })
       
    //}
      
  })

  app.delete('/todo' , function(req, res){

  })
  


}