let express = require('express');
let path = require('path');
let app = express();

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });
app.use(express.static(path.normalize('../client')));

app.listen(8080);
