import { server } from "../index"
import presence from "../types/presence"

export = new server.routeFile((file) => file
  .http('GET', '/', (http) => http
    .document((docs) => docs
      .description('Get the current presence')
    )
    .onRequest((ctr) => {
      return ctr.print({
        success: true,
        presence: { ...presence.get(), event: undefined }
      });
    })
  )
  .ws('/', (ws) => ws
    .onConnect((ctr) => {
      ctr.printRef(presence)

      ctr.print(presence.get());
    })
  )
);