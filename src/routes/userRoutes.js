const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const { protect, authorize } = require("../middlewares/authMiddleware");
const { deleteUser,updateUserByAdmin } = require("../controllers/userController");

const router = express.Router();

router.get("/", protect, authorize("admin"), getAllUsers);
router.delete("/:id", protect, authorize("admin"), deleteUser);
router.put("/:id", protect, authorize("admin"), updateUserByAdmin);

module.exports = router;
 