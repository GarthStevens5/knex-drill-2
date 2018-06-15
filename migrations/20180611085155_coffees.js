exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffees', (coffees) => {
    coffees.increments()
    coffees.text('name')
    coffees.text('roaster')
    coffees.integer('aroma')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coffees')
}
