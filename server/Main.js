const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const cookParser = require("cookie-parser");
const RefreshTok = require("./middleware/RefreshTok");
const app = express();
app.use(express.json());
const checkAuth = require("./middleware/JwtAuth");
const mysql = require("mysql");

// ambot sakto baka cors ka animal

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: false,
  })
);
env.config();

//diri nimo gi import ang routes/endpoints nimo

app.use("/", RefreshTok);
const RegisterApi = require("./ApiRoutes/RegisterApi");
app.use("/", RegisterApi);
// const LoginApi = require("./ApiRoutes/LoginApi");
// app.use("/", LoginApi);
const Logout = require("./ApiRoutes/Logout");
app.use("/", Logout);
const UserProf = require("./ApiGet/UserProf");
app.use("/", UserProf);
app.use("/", checkAuth);
const LoginFlast = require("./ApiRoutes/loginFlast");
app.use("/", LoginFlast);

const db = mysql.createConnection({
  port: process.env.PORT_UNA,
  host: process.env.HOST_UNA,
  user: process.env.USER_UNA,
  password: process.env.PASSWORD_UNA,
  database: process.env.DATABASE_UNA,
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conneted to the UNA");
});






const PORT = process.env.PORT_API || 5181;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
