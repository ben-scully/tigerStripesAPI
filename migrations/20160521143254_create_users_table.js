
exports.up = function(knex, Promise) {
  console.log("creating 'users' table")

  return  knex.schema.createTableIfNotExists('users', function (table) {
      table.increments('user_id')
      table.string('user_name')
      table.string('user_email')
      table.string('user_password')
    })
};

exports.down = function(knex, Promise) {
  console.log("destroying 'users' table")

  return knex.schema.dropTableIfExists('users')
}
