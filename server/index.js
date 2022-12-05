const WebSocket = require('ws');

const PORT = 8080
// Inicializa el servidor de websocket
const wss = new WebSocket.Server({ port: PORT });

// Escucha por conexiones entrantes
wss.on('connection', ws => {
  console.log(`Nuevo cliente conectado: `);
  

  // Escucha por mensajes enviados desde el cliente
  ws.on('message', mensaje => {
    console.log(`Mensaje recibido: ${mensaje}`);
    wss.clients.forEach((client) =>
    {
      if(client.readyState === WebSocket.OPEN && client !== ws)
      {
        client.send(`Mensaje remoto: ${mensaje}`)
      }
      else if(client === ws)
      {
        client.send(`Enviado: ${mensaje}`)
      }
    })
  });
});

console.log(`Servidor iniciado en el puerto ${PORT}`);

