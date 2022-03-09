const express = require("express");
const router = express.Router();

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get("/", (req, res) => {
  res.send({ greeting: "Hello nodejs and react" });
});

module.exports = router;
