let data = require("../data");

const users = (req, res) => {
  res.send(data);
};

const userById = (req, res) => {
  res.send(data.find((user) => user.userId == req.params.userId));
};

const userByName = (req, res) => {
  res.send(data.find((user) => user.name == req.params.name));
};

const userByOnboarded = (req, res) => {
  res.send(data.find((user) => user.onboarded == true));
};

const userByHeight = (req, res) => {
  res.send(data.find((user) => user.height == req.params.height));
};

const addUser = (req, res) => {
    const {userId, name, designation, onboarded, height} = req.body;
    const user = {userId,name,designation, onboarded, height};
    data = [...data, user];
    res.code(201).send(user);
};

module.exports = {
  users,
  userById,
  userByName,
  userByOnboarded,
  userByHeight,
  addUser
};
