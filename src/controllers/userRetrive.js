const jwt = require("jsonwebtoken")

export default function retriveActiveUser(req, res, next) {
  if (req.headers.authorization) {
    const reqAccess = req.headers.authorization.split(" ")[1]; //Remove Bearer and get token after it;
    jwt.verify(reqAccess, 'access_token', (err, decoded) => {
      if (err) throw err;
      const { email, username } = decoded;
      req.user = decoded;
      next()
    });
  } else res.sendStatus(401);

}