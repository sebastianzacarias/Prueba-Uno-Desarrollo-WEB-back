require("dotenv").config()

const http = require("http")

function requestController() {
    console.log("Hola Mundo Desarrollador")
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(process.env.PORT, function () {
    console.log("Aplicacion corriendo en puerto: " + PORT)
})