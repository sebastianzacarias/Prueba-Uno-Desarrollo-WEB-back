const http = require("http")

function requestController() {
    console.log("Hola Mundo Desarrollador")
}

const server = http.createServer(requestController)

server.listen(4000)