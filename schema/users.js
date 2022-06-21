const users_structure = require("../structure/users");
const {
  users,
  userById,
  userByName,
  userByOnboarded,
  userByHeight,
  addUser,
} = require("../controller/users");

const users_schema = {
  schema: {
    response: {
      200: {
        type: "array",
        items: users_structure,
      },
    },
  },
  handler: users,
};

const userById_schema = {
  schema: {
    response: {
      200: users_structure,
    },
  },
  handler: userById,
};

const userByName_schema = {
  schema: {
    response: {
      200: users_structure,
    },
  },
  handler: userByName,
};

const userByOnboarded_schema = {
  schema: {
    response: {
      200: users_structure,
    },
  },
  handler: userByOnboarded,
};

const userByHeight_schema = {
  schema: {
    response: {
      200: users_structure,
    },
  },
  handler: userByHeight,
};

const addUser_schema = {
  schema: {
    body: {
      type: "object",
      required: ["userId", "name", "designation", "onboarded", "height"],
      properties: users_schema.properties
    },
    response: {
      201: users_structure,
    },
  },
  handler: addUser,
};

module.exports = {
  users_schema,
  userById_schema,
  userByName_schema,
  userByOnboarded_schema,
  userByHeight_schema,
  addUser_schema,
};
