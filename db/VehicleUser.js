var knex = require('./knexMain')

module.exports = {

  findOne: (id) => {
    return  knex('vehicle_users').select('vehicle_id').where('user_id', id)
              .then( (data) => {
                return knex('vehicles').where('vehicle_id', data[0])
              })
  }

}
