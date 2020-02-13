const net = require("net");
const file = process.argv[2];

const conn = net.createConnection({
  host: "localhost",
  port: 3000
});

conn.setEncoding("utf8");

conn.on("connect", () => {
  conn.write(file);
});

conn.on("data", data => {
  console.log(data);
});
