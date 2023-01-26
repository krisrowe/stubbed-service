var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/products', function(req, res) {
    res.sendFile(path.join(__dirname, 'products.json'));
});

app.get('/openapi.yaml', function(req, res) 
{
    res.contentType('application/openapi+yaml');
    res.sendFile(path.join(__dirname, 'openapi.yaml'));
});

app.get('/products/:id', function(req, res) {
    // Load the JSON file and parse to extract the product with the given id.
    var json = require('./products.json');
    var product = json.find(p => p.id == req.params.id);
    if (product) {
        // Send the product as a response.
        res.contentType('application/json');
        res.send(product);
    } else {
        // Send a 404 error.
        res.status(404).send("Product not found");
    }
});


app.listen(process.env.PORT || 8080);
