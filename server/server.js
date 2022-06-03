// express 모듈 호출
const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
// api 처리는 './routes/index'에서 일괄처리
app.use("/api", api);
app.use(cors());
app.use(bodyParser.json());
// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

pgClient.connect();

app.get("/api/get", async (req, res) => {
  const total = await pgClient.query("select * from values");
  res.send(total);
});