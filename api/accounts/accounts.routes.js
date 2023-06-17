const express = require("express");
const router = express.Router();

const {
  getAllAccounts,
  creatNewAccount,
  deletAccount,
  updateAccount,
} = require("./accounts.controllers");
router.get("/", getAllAccounts);

router.post("/", creatNewAccount);

router.delete("/:accountId", deletAccount);

router.put("/:accountId", updateAccount);

module.exports = router;
