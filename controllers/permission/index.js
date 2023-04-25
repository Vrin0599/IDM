import { permission } from "../../models";

export const getPermissionController = ({userDetails}) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(userDetails)
      const query = await permission.findAll({
        where: {
          user_id: userDetails.user_profile_id,
        },
      });
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

export const createPermissionController = ({
  name,
  data,
  repo_id,
  is_active,
}) => {
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

export const updatePermissionController = ({ permission_id, data }) => {
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
          returning: true, //to fetch data along with updated values
        }
      );
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

export const deletePermissionController = ({ permission_id }) => {
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
          returning: true, //to fetch data along with updated values
        }
      );
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};
