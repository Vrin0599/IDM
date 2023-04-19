const { Op } = require("sequelize");
const { role_user_mappings, roles, Users } = require("../../models");

const getRoleMappingController = ({ user_id, role_id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await role_user_mappings.findAll({
        attributes: [],
        include: [
          {
            model: Users,
            attributes: ["id", "username", "contact_number", "email", "is_active"],
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
              user_id: { [Op.eq]: user_id },
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

module.exports = { getRoleMappingController };
