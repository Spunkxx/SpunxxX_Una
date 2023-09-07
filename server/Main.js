const express = require("express");
const cors = require ("cors");
const env = require('dotenv');
const cookParser = require('cookie-parser');
const RefreshTok = require('./middleware/RefreshTok');
const app = express();
app.use(express.json());



// ambot sakto baka cors ka animal 

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: false,
}));
env.config();


//diri nimo gi import ang routes/endpoints nimo

app.use('/', RefreshTok);
const RegisterApi = require('./ApiRoutes/RegisterApi');
app.use('/',RegisterApi);
const LoginApi = require('./ApiRoutes/LoginApi');
app.use('/',LoginApi);
const Logout = require('./ApiRoutes/Logout');
app.use('/',Logout);






const PORT = process.env.PORT_API || 5181;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
