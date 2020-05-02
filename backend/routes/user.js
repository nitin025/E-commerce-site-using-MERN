const express = require("express");
const router = express.Router();

const { getUserById, getUser, updateUser, userPurchaseList } = require("../controllers/user");
const { isSignedIn, isAdmin, isAuthentiacted } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthentiacted, getUser);

router.put("/user/:userId", isSignedIn, isAuthentiacted, updateUser);

router.put("/orders/user/:userId", isSignedIn, isAuthentiacted, userPurchaseList);

module.exports = router;
