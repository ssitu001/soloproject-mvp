const Message = require('./messageModel');
const http = require('http');

module.exports = {
  getMessages: function(request, response) {

    Message.find({}, function(err, foundMessages) {
      //console.log("name", name)
      //console.log("foundMessages", foundMessages)
      if (err) {
        return response.end(err);
      }else {
        // console.log(body)
        return response.end(JSON.stringify(foundMessages));
      }


    });
  },

  postMessage: function(request, response) {
    var messageToSave = "";

      request.on('data', function(chunk) {
        messageToSave += chunk
      });
      request.on('end', function() {
        Message.create(JSON.parse(messageToSave), function(err) {
          if(err){
            response.statusCode = 400;
          } else{
            response.statusCode = 200;
          }
          response.end();
        });
      });
  }
}