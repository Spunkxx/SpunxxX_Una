const express = require("express");
const router = express.Router();

// Logout route
router.post("/logout", (req, res) => {
  // Clear the authentication token by setting it to an empty string
  res.cookie("token", "", { httpOnly: true, maxAge: 0 });

  console.log("Cookies after logout:", req.cookies);

  res.status(200).json({ message: "Cleared" });
 
});

module.exports = router;