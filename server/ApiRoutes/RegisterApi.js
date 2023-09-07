const express = require("express");
const router = express.Router();
const db = require("../DataBase/db");
const bcrypt = require("bcrypt");
const salt = 10;

// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {

//     const hashedPassword = await bcrypt.hash(password, salt);
//     const sql_slc = "SELECT * FROM accounts WHERE email = ?";
//     db.query(sql_slc, [email], (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.json(500).send("Invalid Data");
//       }
//       if (result[0]) {
//         return res.status(400).json({ msg: "Email already in use!" });
//       }
//       const db_ins =
//         "INSERT INTO accounts (name,email,password) VALUES (?,?,?)";
//       db.query(db_ins, [name, email, hashedPassword], (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.json(500).send("Sayup ka sa page register BUANG!!");
//         }
//         res.status(200).send({ msg: "Registration Success.." });
//       });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Naa jud kay sayup");
//   }
// });


// module.exports = router;

// Flast Regis Working //

router.post("/register", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const hashedPaswword = await bcrypt.hash(pass, salt);

    // kung ang email is na gamit na , diri ka dapit nag implement ani

    const db_select = "SELECT * FROM accounts WHERE email = ?";
    db.query(db_select, email, (err, result) => {
      if(err){
        console.error(err);
        return res.json(500).send("Data error")
      }
      if (result[0]) {
        return res
          .status(400)
          .json({ msg: "The Email provide is already taken." });
      }

      // kung ang email wala pa nagamit padayun ka diri

      const db_ins =
        "INSERT INTO accounts (type,email,pass,status,credits,created) VALUES ('user',?,?,0,0,Now())";
      db.query(db_ins, [email, hashedPaswword], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Sayup imong pag register buang!");
        }
        res.status(200).send({ msg: "Registration Success.." });
      });
    });
  } catch (error) {
    console.error(error)
    res.status(500).send("Naa jud kay sayup")
  }
});

module.exports = router;
