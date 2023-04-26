const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
  console.log('New client connected')
  
  ws.on("message", data => {
    console.log(`Message received: ${data}`)

    ws.send(String(data).toUpperCase())
  })

  ws.on("close", () => {
    console.log('Connection closed')
  })
})