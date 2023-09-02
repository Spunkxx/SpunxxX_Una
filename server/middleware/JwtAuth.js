const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token.' });
      }
  
      req.userId = decoded.userId;
      next();
    });
  };
  
  // Example usage:
  router.get('/protected-route', verifyToken, (req, res) => {
    // This route is protected and requires a valid token
    // The userId can be accessed as req.userId
    res.json({ message: 'This is a protected route.' });
  });
  

  