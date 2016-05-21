
exports.up = (knex, Promise) => {
  console.log("creating 'vehicle_users' table")

  return  knex.schema.createTableIfNotExists('vehicle_users', function (table) {
      table.increments('vehicle_user_id')
      table.integer('vehicle_id')
      table.integer('user_id')
    })
};

exports.down = (knex, Promise) => {
  console.log("destroying 'vehicle_users' table")

  return knex.schema.dropTableIfExists('vehicle_users')
}
