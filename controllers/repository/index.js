import { repository } from "../../models";

export const createRepoController = ({ data, is_active, userDetails }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await repository.create({
        data,
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

export const getRepoController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = await repository.findAll({
        offset: 0,
        limit: 10,
      });
      resolve(query);
    } catch (err) {
      reject(err);
    }
  });
};
