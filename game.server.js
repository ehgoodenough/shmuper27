var path = require("path");
var url = require("url");
var fs = require("fs");
 
function handler(request, response)
{
	var action = url.parse(request.url, true).pathname;
	fs.readFile(__dirname + action, function(error, data)
	{
		if(error)
		{
			response.writeHead(500);
			return response.end("Uh oh!!");
		}
		else
		{
			response.end(data);
		}
	});
}

require("http").createServer(handler).listen(1337);
console.log("Server is listening on 127.0.0.1:1337");