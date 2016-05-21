
exports.seed = function(knex, Promise) {
  console.log("seeding 'vehicles'")

  return Promise.join(
    // Deletes ALL existing entries
    knex('vehicles').del(),

    // Inserts seed entries
    knex('vehicles').insert({vehicle_user_id: 1, vehicle_licence_plate: 'AAA123', vehicle_registration_expiry: '2020-02-01', vehicle_wof_expiry: '2019-09-23'}),
    knex('vehicles').insert({vehicle_user_id: 2, vehicle_licence_plate: 'BBB999', vehicle_registration_expiry: '1845-04-13'})
  )
}
