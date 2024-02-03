import "dotenv/config";

import { Server } from "rjweb-server";
import client from "./types/event";

export const server = new Server({
  port: 8000
})

server.path('/', (path) => path
  .loadCJS('./routes')
)

client.login(process.env.DISCORD_BOT_TOKEN);

server.start()
  .then((port) => {
    console.log(`Server started on port ${port}`)
  })
  .catch(console.error)