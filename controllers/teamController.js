"use strict";
const Models = require("../models");
const axios = require("axios");

const fetchAndPopulateData = async (req, res) => {
  try {
    const response = await axios.get("https://api.squiggle.com.au/?q=teams");
    const data = response.data.teams;
    console.log(data);

    // Clear existing data from the table
    await Models.Team.destroy({ truncate: true });

    // Populate the database with the fetched data
    await Models.Team.bulkCreate(data);

    console.log("Data fetched and populated successfully.");
  } catch (error) {
    console.error("Error fetching and populating data:", error);
  }
};
const getUsers = (res) => {
  Models.Team.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createUsers = (data, res) => {
  Models.Team.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const updateUserById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }

  //Update user
  const data = await Models.Team.update(req.body, {
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({ result: 400, stauts: false, message: "Failed to update user" });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Update user succesfully",
  });
};
const deleteUserById = async (req, res) => {
  console.log(req);
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "Cannot Delete" });
  }

  //Update user
  const data = await Models.Team.destroy({
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({
      result: 400,
      stauts: false,
      message: "Failed to delete userUser",
    });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "User deleted succesfully",
  });
};
const findUserById = async (req, res) => {
  const id = req.params.id;
  Models.Team.findByPk(id)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getUsers,
  createUsers,
  updateUserById,
  deleteUserById,
  findUserById,
  fetchAndPopulateData,
};
