const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { protect ,authorize } = require("../middlewares/authMiddleware");
const { getMe } = require("../controllers/authController");
const { updateProfile } = require("../controllers/authController");


const router = express.Router();

router.get("/me", protect, getMe);
router.put("/me", protect, updateProfile);

router.get(
  "/admin",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin 👑" });
  }
);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
