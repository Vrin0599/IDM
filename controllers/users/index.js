import { Users } from "../../models";

export const getUsersController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await Users.findAll();
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};

export const createUsersController = ({
  username,
  contact_number,
  email,
  is_active,
  userDetails,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await Users.create({
        username,
        contact_number,
        email,
        is_active,
        createdBy: userDetails.user_profile_id,
        updatedBy: userDetails.user_profile_id,
      });
      resolve(query);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
