const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const requireRefreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token is required." });
  }
  req.refreshToken = refreshToken;
  next();
};

router.post("/refresh-token", requireRefreshToken, (req, res) => {
  const refreshToken = req.refreshToken;

  // Verify the refresh token
  jwt.verify(refreshToken, process.env.REFRESH_KEY, (refreshErr, decoded) => {
    if (refreshErr) {
      return res.status(401).json({ message: "Invalid refresh token." });
    }

    const userId = decoded.userId;

    const foundRefreshToken = findRefreshTokenInDatabase(userId, refreshToken);

    if (!foundRefreshToken) {
      return res.status(401).json({ message: "Invalid refresh token." });
    }

    // Generate new token
    const payload = { userId };
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "3h",
    });
    res.cookie("token", accessToken, {
      httpOnly: true,
      maxAge: 3 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Token refreshed successfully" });
  });
});

module.exports = router;
