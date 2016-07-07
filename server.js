var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var tableArray = [
	{customerName: "Jennifer", customerEmail: "jennrosedev@gmail.com", customerID: "jennaroe", phoneNumber: "407-999-2222"},
	{customerName: "John", customerEmail: "john@gmail.com", customerID: "johniscool", phoneNumber: "407-888-1111"},
	{customerName: "Jill", customerEmail: "jill@gmail.com", customerID: "jilly", phoneNumber: "407-333-7777"},
];


var waitingArray = [
  {customerName: "Jake", customerEmail: "jake@gmail.com", customerID: "jakey", phoneNumber: "407-444-6666"},
  {customerName: "Jason", customerEmail: "jason@gmail.com", customerID: "jasonrules", phoneNumber: "407-555-1010"},
];

app.get('/', function(req, res){
  res.render('home');
});


app.get('/reserve', function( req, res){
  res.render('reserve');
});


app.get('/tables', function(req,res) {
    res.render('tables', {reserved: tableArray, waiting: waitingArray});
});



// Note how we export the array. This makes it accessible to other files using require. 
var port = 8080;
app.listen(port, function(){
  console.log('listening on port: ' + port);
});