var http = require('http');
var fs = require('fs');

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


http.createServer(function (req, res) {
  fs.readFile('book page.htm', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
var doc = new DOMParser().parseFromString(data, "text/xml");
let listData = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange'
    ],
    // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

// Usage
makeList();
    res.write(data);
    return res.end();
  });
}).listen(8080);
