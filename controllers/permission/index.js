import { permission } from "../../models";

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
        createdBy: userDetails.user_profile_id,
        updatedBy: userDetails.user_profile_id,
      });
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

export const getPermissionController = ({ userDetails }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await permission.findAll({
        offset: 0,
        limit: 10,
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

export const updatePermissionController = ({
  permission_id,
  data,
  userDetails,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await permission.update(
        {
          data,
          updatedAt: new Date(),
          updatedBy: userDetails.user_profile_id,
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
          updatedBy: userDetails.user_profile_id,
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
