const bcrypt = require("bcrypt");

const password = "wilberk123";

// Encrypt password
bcrypt.hash(password, 10, (err, hash) => {
  bcrypt.compare(password, hash, (err, res) => {
    console.log(res);
  });
});
