const models = require('../models')
const sequelize = require('sequelize')

const findByID = async (id) => {
  let number = await models.Number.findOne({
    where: {
      id: id
    },
  })

  return number
}

const increment = async (id, column, value) => {
  let number = await models.Number.update({
      [column]: sequelize.literal(`${column} + ${value}`),
  }, {
    where: {
        id: id,
    },
    returning: true,
    plain: true,
  });

  return number;
};

module.exports = {
  findByID,
  increment
}
