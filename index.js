var connect = require('connect');

//create a new connect
var app = connect();

//set up defualt response
var maths = function(req, res, next) {
  res.end("Please add a Method, x and a y in the url");

};

//rou
app.use(maths);

//listen for events on port 3000

app.listen(3000);

//log it
console.log('connect running on port 3000');
