const aCar = {
  owner: "Joe Bloggs",
  /* 
  previous_owners: [
   "Pat Smith - 1 Main Street",
   "Sheila Dwyer - 2 High Street",
  ],
  */
  previous_owners: [
    {
      name: "Pat Smith",
      address: "1 Main Street",
    },
    {
      name: "Sheila Dwyer",
      address: "2 High Street",
    },
  ],
  address: "3 Walkers Lane",
  type: {
    make: "Toyota",
    model: "Corolla",
    cc: 1.8,
  },
  registration: {
    year: 201,
    countyCode: "WD",
    number: 1058,
  },
};

// Add a new property
aCar.mileage = 10000;
// Add a new object
aCar.color = {
  exterior: "red",
  interior: {
    texture: "leather",
    shade: "cream",
  },
};

console.log(aCar.owner + " drives a " + aCar.type.make);

console.log(
  "Reg. = " +
    aCar.registration.year +
    "-" +
    aCar.registration.countyCode +
    "-" +
    aCar.registration.number
);

console.log(
  "It is a " +
    aCar.color.exterior +
    " car, " +
    aCar.mileage +
    " mileage, with " +
    aCar.color.interior.texture +
    " interior."
);

// console.log("First owner : " + aCar.previous_owners[0]);
console.log(
  "First owner : " +
    aCar.previous_owners[0].name +
    " - " +
    aCar.previous_owners[0].address
);
