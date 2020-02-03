const express = require('express');
const app = express();

const port = 8080;

app.get('/', function(req,res){
    res.json({message:"Hello World"});
});

app.get('/status', function(req,res){
    res.json({
        "status": "OK",
        "postgresUptime": String,
        "redisConnectedClients": Number
    });
});


app.listen(port)
