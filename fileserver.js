var http = require("http");
var parse = require("url").parse;
var join = require("path").join;
var fs = require("fs");

var root = __dirname;

var server = http.createServer(function(req, res){
	var url = parse(req.url);
	var path = join(root, url.pathname);
	/*fs.stat(path, function(err, stat) {
		if(err) {
			if(err.code == "ENOENT") {
				res.statusCode = 404;
				res.end("Not found");
			} else {
				res.statusCode = 500;
				res.end("Interal Server Error");
			}
		} else {
			res.setHeader("Content-Length", stat.size) ;
		 	var stream = fs.createReadStream(path);
		 	stream.pipe(res);
		 	stream.on('error', function(err){
			res.statusCode = 500;
			res.write(stat);
			res.end('Internal Server Error');
});

		}
	});*/
    var i = 0;
	var stream = fs.createReadStream(path);
	stream.on("data", function(chunk) {
		res.write(chunk);
		console.log(i);
		i++;
	});
	stream.on("end", function() {
		res.end();
	});

});

server.listen(3000);