const express = require("express");
const keeperSecretsRecords = require("./keeper-secrets-manager/storage");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(await keeperSecretsRecords);

  console.log(`Example app listening on port ${port}`);
});
