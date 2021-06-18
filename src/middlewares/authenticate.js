const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


function authenticate(req, res, next) {
  const { email, password, username } = res.locals.user;
  bcrypt.compare(
    req.body.password,
    password,
    (err, pass) => {
      if (pass) {
        let accessToken = jwt.sign({ email, username }, 'access_token');

        res.status(200).json({
          data: {
            access_token: accessToken,
            refresh_token: jwt.sign({ email, username }, 'refresh_token'),
          },
        });
      } else res.json({ error: "Username or Password is Wrong" });
    }
  );
}
module.exports = authenticate;