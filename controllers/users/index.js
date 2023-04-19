const { Users } = require("../../models");

const getUsersController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await Users.findAll();
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

const createUsersController = ({
  username,
  contact_number,
  email,
  is_active,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await Users.create({
        username,
        contact_number,
        email,
        is_active,
        createdBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
        updatedBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
      });
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getUsersController,
  createUsersController,
};
