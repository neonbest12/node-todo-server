const bcrypt = require('bcryptjs')
export default function (req) {
  return new Promise((resolve) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        req.body.hashedPassword = hash;
        resolve();
      });
    });
  });
}