const http = require('http');

function respondePeticion(request,response){
  response.end('Hola Mundo');
}

let server = http.createServer(respondePeticion);

server.listen(3000);
