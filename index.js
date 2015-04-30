var http = require("http");
var url = require("url");
var items = [];

function httpServer(request, response) {
	switch (request.method) {
		case "POST":
		var item = "";
	    request.setEncoding("utf-8");
	    request.on('data', function(chunk) {
    	item += chunk;
    	console.log(chunk);
		});

		request.on("end", function() {
		items.push(item);
		response.end("OK\n");
		});
		break;

		case "GET":
		items.forEach(function(item, i) {
		response.write(i + item);
		});
		response.end();
		break;

		case "DELETE":
		var path = u rl.parse(request.url).pathname;

		var i = parseInt(path.slice(1), 10);

		if(isNaN(i)) {
			response.statusCode = 400;
			res.end("Invalid item id");
		} else if (!item[i]) {
			response.statusCode = 404;
			response.end("Item not found");
		} else {
			item.splice(i,1);
			response.end("Deleted");
			console.log("Deleted");
		}
		break;
    }
}

var server = http.createServer(httpServer);
server.listen(3001);