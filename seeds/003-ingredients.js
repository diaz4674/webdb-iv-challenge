
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { name: 'cheese'},
    { name: 'tomato sauce'},
    { name: 'pepperoni'},
    { name: 'buns'},
    { name: 'dough'},
    { name: 'patty'},
    { name: 'pineapple'}
  ])
};
