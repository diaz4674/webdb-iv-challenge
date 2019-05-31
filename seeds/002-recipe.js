
exports.seed = async function(knex) {
  await knex('recipe').insert([
    { Dish: 'Pineapple Pizza', dish_id: 1 },
    {Dish: 'Cheese Hamburger', dish_id: 2 }
  ])
};
