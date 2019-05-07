const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/first-project/'));

app.listen(process.env.PORT || 8080);

// PathLocationStragedy
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('console listening on port' + `${process.env.PORT || 8080}`);
