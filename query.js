const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "postgres",
  port: 5445,
  database: "eventloop-db",
});

client.connect();

console.log("Starting Node.js");

client.query("SELECT * FROM public.cars", function callback(_err, _res)  {
  console.log("Query executed");
  client.end();
});
console.log("Before query result");
