
exports.up = (knex, Promise) => {
  console.log("creating 'driver_licences' table")

  return  knex.schema.createTableIfNotExists('driver_licences', function (table) {
      table.increments('dlicence_id')
      table.integer('dlicence_user_id')
      table.string('dlicence_number')
      table.date('dlicence_expiry')
      table.string('dlicence_photo')
    })
};

exports.down = (knex, Promise) => {
  console.log("destroying 'driver_licences' table")

  return knex.schema.dropTableIfExists('driver_licences')
}
