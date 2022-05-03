import express from "express";
import connection from "./db/connect";
import blogrouter from "./routes/blog-route";
import router from "./routes/user-route";
const app = express();

connection();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogrouter);

app.listen(1000, () => {
  console.log("we are listening at 1000");
});
