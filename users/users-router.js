const bcryptjs = require("bcryptjs"); 
const router = require("express").Router();

const Users = require("./users-model.js");
const { isValid } = require("../users/users-service.js");

router.post("/register", (req, res) => {
  const credentials = req.body;
  if(isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;  
    // hash the password 
    const hash = bcryptjs.hashSync(credentials.password, rounds); 
    credentials.password = hash;   
  } else {
    res
      .status(400)
      .json({
        message: "please provide username and password and the password should be alphanumeric",
      });
  }
});

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;

