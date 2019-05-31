
exports.seed = async function(knex) {
  await knex('dish').insert([
    { name: 'Pizza'},
    {name: 'Hamburger'}
  ])
};
