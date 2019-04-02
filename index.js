const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  fs.readFile('./resources/index.html',(error, data) => {
    if (error) {
      console.error(error)
      return
    }
    res.end(data)
  })
})

server.listen('4000');