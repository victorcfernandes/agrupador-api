exports.up = function(knex) {
  return knex.schema.createTable("groups", function(table) {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.string("link", 255).notNullable();
    table.text("description").notNullable();
    table.float("lat").notNullable();
    table.float("lng").notNullable();
    table.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("groups");
};
