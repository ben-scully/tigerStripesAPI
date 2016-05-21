
exports.seed = function(knex, Promise) {
  console.log("seeding 'driver_licences'")

  return Promise.join(
    // Deletes ALL existing entries
    knex('driver_licences').del(),

    // Inserts seed entries
    knex('driver_licences').insert({dlicence_number: '343434', dlicence_user_id: 1}),
    knex('driver_licences').insert({dlicence_number: '565656', dlicence_user_id: 3, dlicence_expiry: '1999-11-23'})
  )
}
