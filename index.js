
var cfenv = require('cfenv')
var http = require('http')
var request = require('request')

var appEnv = cfenv.getAppEnv()
var port = appEnv.port
var target = process.env.PROXY_TARGET

console.log(port, target)

const server = http.createServer(function (req, resp) {
  req.pipe(request(target)).pipe(resp)
})

server.listen(port)

console.log('listening on port ' + port)
