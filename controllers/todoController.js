var data = [
  {item : "finish mongodb"},
  {"item" : "drink some water"},
  {"item" : "call some one :)"}
]
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended : false});

module.exports = function (app) {
  
  
  app.get('/todo' , function (req , res) {
        res.render('todo', {todo : data})
  })

  app.post('/todo' , function(req, res){
      data.push(req.body)
      res.json(data)
  })

  app.delete('/todo' , function(req, res){

  })
  


}