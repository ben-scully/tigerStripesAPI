
exports.seed = function(knex, Promise) {
  console.log("seeding 'vehicle_users'")

  return Promise.join(
    // Deletes ALL existing entries
    knex('vehicle_users').del(),

    // Inserts seed entries
    knex('vehicle_users').insert({vehicle_id: 1, user_id: 1}),
    knex('vehicle_users').insert({vehicle_id: 2, user_id: 2})
  )
}
