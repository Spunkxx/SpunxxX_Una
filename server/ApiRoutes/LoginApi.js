const express = require("express");
const router = express.Router();
const db = require("../DataBase/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const checkAuth = require('../middleware/JwtAuth');


router.use(express.json());
router.use(cookieParser());

router.post("/login", checkAuth, (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM accounts WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Error during login" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const user = results[0];
      console.log("Database Query Results:", results);

      // console.log('user.Password:', user.password);
      // console.log('Password:', password);

      // const hashedPassword = await bcrypt.hash(password, 10);
      // console.log(hashedPassword)

      bcrypt.compare(password, user.password, (compareErr, isMatch) => {
        if (compareErr) {
          console.error("Error comparing passwords:", compareErr);
          return res.status(500).json({ message: "Error during login" });
        }

        if (isMatch) {
          // jwt auth
          const payload = { userId: user.id, email: user.email  };
          const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "3h",
          });
          // cookie
          res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 60 * 60 * 1000,
          });

          console.log("Cookie:", token);
          
          res.status(200).json({ message: "Login successful" });
          return console.log("Success");
        } else {
          return res.status(401).json({ message: "Invalid credentials" });
        }
      });
    }
  );
});

module.exports = router;
