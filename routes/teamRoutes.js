const db = require("../dbConnect");

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
router.get("/names", (req, res) => {
    Controllers.userController.fetchAndPopulateData(res);
  });
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});
router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});
router.put("/update/:id", (req, res) => {
    Controllers.userController.updateUserById(req, res);
  });
router.delete("/delete/:id", (req, res) =>{
    Controllers.userController.deleteUserById(req, res)
})
router.get("/finduser/:id",(req, res) =>{
    Controllers.userController.findUserById(res)
})
module.exports = router;