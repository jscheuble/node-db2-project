exports.up = function (knex) {
  return knex.schema.createTable("car-dealer", (tbl) => {
    tbl.increments();
    tbl.string("vin").notNullable().unique().index();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("car-dealer");
};
