
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
      table.increments('id').primary();
      table.string('product_name').notNullable();
      table.string('product_description').notNullable();
      table.string('product_image').notNullable();
      table.string('product_price').notNullable();
      table.string('product_brand').notNullable();
      table.string('product_main_color').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
