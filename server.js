const express = require('express');
const config = require('./configs/server.json');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || config.PORT;
const HOST = process.env.HOST || config.HOST;

app.listen(PORT, HOST, () => {
  console.log(`started on ${HOST}:${PORT}`);
});
