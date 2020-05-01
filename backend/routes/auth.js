var express = require("express");
var router = express.Router();

const { check, validationResult } = require("express-validator");
const { signOut, signUp, signIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Name should be atleast 3 char").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be 3 char").isLength({ min: 3 }),
  ],
  signUp
);

router.post(
    "/signin",
    [
      check("email", "Email is required").isEmail(),
      check("password", "Password field is required").isLength({ min: 1 }),
    ],
    signIn
  );


router.get("/signout", signOut);

module.exports = router;
