const jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021';

exports.checkAuthorization = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ status: 'error', message: 'Invalid or expired token' });
  }
};
