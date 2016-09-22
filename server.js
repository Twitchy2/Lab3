//get the vars

var connect = require('connect');
var url = require('url');
//create new connect
var app = connect();

//basic route
//try default response
var tryIt = function(req,res,next) {
  res.end('Enter the math in the URL please');
};

var math = function(req, res, next) {
  //put in the query things?
  //IMPORTANT FOR FUTURE, getParameterByName IS HOW YOU PUT WORDS INTO THE URL
  var qs = url.parse(req.url, true).query;

//I guess QS calls the vars in the url?
  var method = qs.method;

  var x = qs.x;

  var y = qs.y;


  switch(method) {
        case 'add':     //make sure to put : after these, not ;
        var total = +x + +y;
        break;

        case 'subtract':
        var total = x - y;
        break;

        case 'multiply':
        var total = x * y;
        break;

        case 'divide':
        var total = x / y;
        break;

        default:
        var total = 'Error! The method needs to be a mathematical operation!';
      };

//now write it all in
  res.end('Method: ' + method + '\n'
          + 'X = ' + x + '\n'
          + 'Y = ' + y + '\n'
          + 'Total: ' + total);

};
//Begin the method and show the page
app.use(math);

//Listen or something to make sure its working
app.listen(3000);
//Now log it
console.log('Port 3000 is working');
