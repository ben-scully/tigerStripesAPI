var knex = require('./knexMain')

module.exports = {

  findOne: (id) => {
    return  knex('vehicles').where('vehicle_id', id)
  },

  create: (vehicle) => {
    return  knex('vehicles').insert(vehicle)
  }

}
