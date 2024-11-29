const express = require("express");
const cors = require("cors");
const app = express();

// 全局启用 CORS
app.use(
  cors({
    origin: "http://localhost:3000", // 允许的前端地址
    methods: ["GET", "POST", "PUT", "DELETE"], // 允许的 HTTP 方法
    credentials: true, // 如果需要传递 Cookie 或认证信息
  })
);

// 支持 x-www-form-urlencoded 和 JSON 格式请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/market", (req, res) => {
  console.log(req.headers); // 打印请求头
  console.log(req.body); // 打印请求体
  res.status(201).json(req.body); // 返回请求体作为响应
});

// 启动服务器
const PORT = 5050;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
