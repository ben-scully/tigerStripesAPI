var knex = require('./knexMain')

module.exports = {

  findOne: (id) => {
    return knex('driver_licences').where('dlicence_user_id', id)
  },

  create: (driverLicence) => {
    return knex('driver_licences').insert(driverLicence)
  }

}
