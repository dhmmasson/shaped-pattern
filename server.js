var express = require('express');
var app = express();


app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
app.set('view engine', 'pug')
app.use(express.static('.'));


app.get('/pug/:name', function (req, res) {
  res.render(req.params["name"] +".pug", { title: 'Hey', message: 'Hello there!' })
})