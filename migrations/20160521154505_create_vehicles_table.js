
exports.up = (knex, Promise) => {
  console.log("creating 'vehicles' table")

  return  knex.schema.createTableIfNotExists('vehicles', function (table) {
      table.increments('vehicle_id')
      table.string('vehicle_licence_plate')
      table.date('vehicle_registration_expiry')
      table.string('vehicle_registration_photo')
      table.date('vehicle_wof_expiry')
      table.string('vehicle_wof_photo')
    })
};

exports.down = (knex, Promise) => {
  console.log("destroying 'vehicles' table")

  return knex.schema.dropTableIfExists('vehicles')
}
