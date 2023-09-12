const aCar = {
  owner: "Joe Bloggs",
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
console.log(
  "It is a " +
    aCar.color.exterior +
    " car, " +
    aCar.mileage +
    " mileage, with " +
    aCar.color.interior.texture +
    " interior."
);

console.log(aCar.owner + " drives a " + aCar.type.make);

console.log(
  "Reg. = " +
    aCar.registration.year +
    "-" +
    aCar.registration.countyCode +
    "-" +
    aCar.registration.number
);
