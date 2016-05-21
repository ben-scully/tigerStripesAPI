var knex = require('./knexMain')

module.exports = {

  getAll: () => {
    return knex('users')
  },

  findOne: (id) => {
    return knex('users').where('user_id', id)
  },

  findOneByEmail: (email) => {
    return knex('users').where('user_email', email)
  }

}
