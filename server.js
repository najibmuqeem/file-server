const net = require("net");
const fs = require("fs");

const server = net.createServer();

server.on("connection", client => {
  client.setEncoding("utf8"); // interpret data as text
  client.on("data", data => {
    fs.readFile(data, (err, data) => {
      client.write(data);
    });
  });
});

server.listen(3000, () => {});
