var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demohtml.html', function(err, document) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let items = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange'
    ];

   var html = '<!DOCTYPE html><html><head><title>My Title</title></head><body>';
    html += 'Some more static content';
    html += 'Some more static content';
    html +
var mysql = require('mysql2');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "uchihaboi",
  database: "IITD"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});