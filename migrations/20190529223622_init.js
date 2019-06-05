
exports.up = function(knex) {
  return knex.schema.createTable('dish', (tbl) => {
      tbl.increments('id')
      tbl.string('name', 128).unique().notNullable()
 })
  
  .createTable('recipe', (tbl) => {
      tbl.increments()
      tbl.string('Dish').notNullable()
      tbl.integer('dish_id').notNullable().references('id').inTable('dish').onDelete('CASCADE').onUpdate('CASCADE')
    })
  
  .createTable('ingredients', (tbl) => {
      tbl.increments()
      tbl.string('name').notNullable()
  })

  .createTable('recipe_ingredients', (tbl) =>{
      tbl.increments()
      tbl.integer('recipe_id').references('id').inTable('recipe').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      tbl.integer('ingredients_id').references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE').notNullable()
      tbl.integer('quantity').notNullable()
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe_ingredients')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('recipe')
    await knex.schema.dropTableIfExists('dish')
};
