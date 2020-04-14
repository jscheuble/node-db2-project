exports.up = function (knex) {
  return knex.schema.table("car-dealer", (tbl) => {
    tbl.string("transmission");
    tbl.string("title");
  });
};

exports.down = function (knex) {
  return knex.schema.table("car-dealer", (tbl) => {
    tbl.dropColumn("transmission");
    tbl.dropColumn("title");
  });
};
