var express = require('express');
var path = require('path');
var router = express.Router();

app = express();
app.use('/', express.static(__dirname + '/dist'));
app.use('/dist', express.static(__dirname + '/dist'));

/* Redirect all routes to index.html page */
router.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.listen(process.env.PORT || 5000);