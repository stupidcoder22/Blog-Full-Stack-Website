import express from "express";
import connection from "./db/connect.js";
import blogrouter from "./routes/blog-route.js";
import router from "./routes/user-route.js";
import cors from "cors";
const app = express();
connection();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogrouter);

app.listen(1000, () => {
  console.log("we are listening at 1000");
});
