const express = require('express');
const fs = require('fs');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.use(connectLiveReload());
app.use(express.static(__dirname + '/public'));
app.get('/', async (req, res) => {
  const result = await fs.promises.readFile('public/index.html', {
    encoding: 'utf-8',
  });
  return res.send(result);
});

app.listen(3000, () => {
  console.log('Server started');
});
