const db = require("../dbConnect");

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/names", (req, res) => {
  Controllers.teamController.fetchAndPopulateData(res);
});
router.get("/", (req, res) => {
  Controllers.teamController.getUsers(res);
});
router.post("/create", (req, res) => {
  Controllers.teamController.createUsers(req.body, res);
});
router.put("/update/:id", (req, res) => {
  Controllers.teamController.updateUserById(req, res);
});
router.delete("/delete/:id", (req, res) => {
  Controllers.teamController.deleteUserById(req, res);
});
router.get("/finduser/:id", (req, res) => {
  Controllers.teamController.findUserById(res);
});
module.exports = router;
