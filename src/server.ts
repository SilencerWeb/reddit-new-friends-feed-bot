const express = require('express');


export const startServer = (): void => {
  const app = express();

  const server = app.listen(process.env.PORT, '0.0.0.0', (): void => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Web server started at http://${ host }:${ port }`);
  });

  app.get('/', (request: any, response: any): void => {
    response.sendStatus(200);
  });
};