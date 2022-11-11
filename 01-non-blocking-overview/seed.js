const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  port: 5445,
  database: "eventloop-db",
});

pool.connect((err, client, done) => {
  if (err) throw err;
  const seedQuery = fs.readFileSync("./seed.sql", { encoding: "utf8" });
  client.query(seedQuery, (_err, _res) => {
    console.log("Seeding Completed!");
    pool.end();
    done();
  });
});
