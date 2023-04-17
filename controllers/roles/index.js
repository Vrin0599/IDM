const { roles } = require("../../models");

const getRolesController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await roles.findAll();
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

const createRolesController = ({ name, description, permissions }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let payload = {
        name,
        description,
        updatedAt: new Date(),
        updatedBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
        createdAt: new Date(),
        createdBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
        is_active: false,
      };
      const role_data = await roles.create(payload);
      resolve(role_data);
    } catch (err) {
      reject(err);
    }
  });
};

const updateRolesController = ({ roles_id, name, description }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await roles.update(
        {
          name,
          description,
          updatedAt: new Date(),
          updatedBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
        },
        {
          where: {
            id: roles_id,
          },
          returning: true, //to fetch data along with updated values
        }
      );
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

const deleteRolesController = ({ roles_id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await roles.destroy({
        where: {
          id: roles_id,
        },
        returning: true, //to fetch data along with updated values
      });
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getRolesController,
  createRolesController,
  updateRolesController,
  deleteRolesController,
};
