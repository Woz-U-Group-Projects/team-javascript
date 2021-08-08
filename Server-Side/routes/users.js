const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../services/auth");
const { sign } = require("jsonwebtoken");


router.post("/", async (req, res, next) => {
  try {
  const { username, password, first_name, last_name, email } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    users.create({
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hash,
    });
    res.json("SUCCESS");
  });
  }   catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await users.findOne({ where: { username: username } });

  if (!user) return res.json({ error: "User Doesn't Exist!!! "+username });

  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(basicInfo);
});

router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await users.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      users.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("SUCCESS");
    });
  });
});

module.exports = router;
