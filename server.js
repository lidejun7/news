var express = require('express');
var app = express()
app.use(express.static('./dist'))
app.get('/',function(req,res){
	
})
app.listen(8888,'192.168.31.12');
