const { permission } = require("../../models");

const getPermissionController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await permission.findAll();
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

const createPermissionController = ({ name, data, repo_id, is_active }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await permission.create({
        name,
        data,
        repo_id,
        is_active,
        createdAt: new Date(),
        updatedAt: new Date(),
        // createdBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
        // updatedBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
      });
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

const updatePermissionController = ({ permission_id, data }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await permission.update(
        {
          data,
          updatedAt: new Date(),
          updatedBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
        },
        {
          where: {
            id: permission_id,
          },
          returning: true //to fetch data along with updated values
        }
      );
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

const deletePermissionController = ({ permission_id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await permission.update(
        {
          is_active: false,
          updatedAt: new Date(),
          updatedBy: "70f51a6a-58e0-4656-bfce-8412331a06ba",
        },
        {
          where: {
            id: permission_id,
          },
          returning: true //to fetch data along with updated values
        }
      );
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getPermissionController,
  createPermissionController,
  updatePermissionController,
  deletePermissionController,
};
