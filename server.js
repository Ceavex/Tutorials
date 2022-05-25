const express = require("express")
const server = express()

server.all("/", (req, res) => {
    res.send("Бот успешно запущен")
})

function keepAlive() {
    server.listen(3000, () => {
        console.log("Готово")
    })
}

module.exports = keepAlive