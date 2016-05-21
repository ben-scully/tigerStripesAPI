
exports.seed = function(knex, Promise) {
  console.log("seeding 'users'")

  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({user_name: 'lucy', user_email: 'l@l.com', user_password: 'h'}),
    knex('users').insert({user_name: 'brian', user_email: 'b@b.com', user_password: 'h'}),
    knex('users').insert({user_name: 'steve', user_email: 's@s.com', user_password: 'h'})
  )
}
