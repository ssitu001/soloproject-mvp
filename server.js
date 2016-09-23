var express = require('express');
var app = express();
var path = require('path');
var messageController = require('./message/messageController');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// mongoose.connect(JSON.parse(fs.readFileSync(__dirname + '/config.json','utf8')).uri, function() {
//   connectedToDB = true;
//   console.log('connected to mongo');
// });

app.use(express.static(__dirname)); //serves the index.html

// app.get('/messages', messageController.getMessages);

// app.post('messages', messageController.postMessages)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});