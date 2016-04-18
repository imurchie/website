var express = require('express');
var app = express();

express.static('./static');

app.listen(3000, function () {
  console.log('Example app listening on port 80!');
});
