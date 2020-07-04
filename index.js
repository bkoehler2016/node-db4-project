const server = require('./server')

const PORT = process.env.PORT || 4040

server.listen(PORT, () => {
console.log(`You can find the server on port ${PORT}`)
})