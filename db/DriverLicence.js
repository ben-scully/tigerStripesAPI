var knex = require('./knexMain')

module.exports = {

  findOne: (id) => {
    return knex('driver_licences').where('dlicence_user_id', id)
  }

}
