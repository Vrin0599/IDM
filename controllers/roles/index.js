import { roles, role_permission_mappings } from "../../models";

export const createRolesController = ({
  name,
  description,
  permissions,
  userDetails,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      let payload = {
        name,
        description,
        updatedBy: userDetails.user_profile_id,
        createdBy: userDetails.user_profile_id,
        is_active: false,
      };
      let role_data = await roles.create(payload);
      role_data = role_data.toJSON();

      const role_mapping_data = permissions.map((permission) => {
        return {
          permission_id: permission,
          role_id: role_data.id,
        };
      });
      await role_permission_mappings.bulkCreate(role_mapping_data);
      resolve(role_data);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const getRolesController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await roles.findAll({
        offset: 0,
        limit: 10,
      });
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

export const updateRolesController = ({
  roles_id,
  name,
  description,
  userDetails,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await roles.update(
        {
          name,
          description,
          updatedAt: new Date(),
          updatedBy: userDetails.user_profile_id,
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

export const deleteRolesController = ({ roles_id }) => {
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
