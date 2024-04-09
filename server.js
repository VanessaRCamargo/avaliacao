const express = require("express")
const routes = require("./routes/routes")

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(routes)

const PORTA = 8080

server.listen(PORTA,()=>{
    console.log("Servidor executando na porta "+PORTA)
})