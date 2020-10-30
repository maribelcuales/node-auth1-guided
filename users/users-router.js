const router = require("express").Router();

const Users = require("./users-model.js");

function restricted(req, res, next) {
  if(req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ you: "cannot pass!" });
  }
}

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;

