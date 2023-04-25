import { Op } from "sequelize";
import { role_user_mappings, roles, Users } from "../../models";

export const getRoleMappingController = ({ role_id, userDetails }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await role_user_mappings.findAll({
        attributes: [],
        include: [
          {
            model: Users,
            attributes: [
              "id",
              "username",
              "contact_number",
              "email",
              "is_active",
            ],
            required: false,
          },
          {
            model: roles,
            attributes: ["id", "name"],
            required: false,
          },
        ],
        where: {
          [Op.and]: [
            {
              user_id: { [Op.eq]: userDetails.user_profile_id },
            },
            {
              role_id: { [Op.eq]: role_id },
            },
          ],
        },
      });
      resolve(response);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
