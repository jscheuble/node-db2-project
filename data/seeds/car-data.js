exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("car-dealer")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("car-dealer").insert([
        {
          id: 1,
          vin: "2HGES26772H566107",
          make: "Honda",
          model: "Civic",
          mileage: 172019,
          transmission: "auto",
          title: "clean",
        },
        {
          id: 2,
          vin: "WVGAV75N69W510474",
          make: "Volkswagen",
          model: "Golf",
          mileage: 58092,
          transmission: "manual",
          title: "salvaged",
        },
        {
          id: 3,
          vin: "4T1SK12E1NU028452",
          make: "Toytota",
          model: "Camry",
          mileage: 98013,
          transmission: "auto",
          title: "clean",
        },
        {
          id: 4,
          vin: "JF1GH6B60BG810286",
          make: "Subaru",
          model: "Impreza",
          mileage: 128288,
          transmission: "manual",
          title: "rebuilt",
        },
        {
          id: 5,
          vin: "KL5VM52L54B110914",
          make: "Suzuki",
          model: "Verona",
          mileage: 99102,
          transmission: "auto",
          title: "salvaged",
        },
        {
          id: 6,
          vin: "1G1YY26W285119002",
          make: "Chevrolet",
          model: "Corvette",
          mileage: 28987,
          transmission: "manual",
          title: "clean",
        },
        {
          id: 7,
          vin: "1C4NJPBA1CD661292",
          make: "Jeep",
          model: "Grand Cherokee",
          mileage: 136223,
          transmission: "auto",
          title: "clean",
        },
      ]);
    });
};
