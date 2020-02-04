var http = require('http')
var dt = require('./datum')
var url = require('url')
var fs = require('fs')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain' })
    res.write("datumet och tiden är för nuvarandet: " + dt.myDateTime())
    res.write(req.url)
    var x = url.parse(req.url, true).query
    var txt = x.year + " " + x.month
    res.write(txt)
    res.end()
}).listen(8080)