var db = require("../models");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch"
);

var collectionSeed = [
  {
    name: "Rare & Reserve",
    handle: "reservecoffees",
    has_decaf: false,
    imgURL: "/assets/images/collectionTags/pour-over-coffee-to-order-at-cafe_925x.jpg"
  },
  {
    name: "Roaster's Selection",
    handle: "roastersselection",
    has_decaf: true,
    imgURL: "/assets/images/collectionTags/hand-full-of-roasted-coffee_925x.jpg"
  },
  {
    name: "Casual Coffee",
    handle: "casualcoffee",
    has_decaf: false,
    imgURL: "/assets/images/collectionTags/holding-coffee-in-bed_925x.jpg"
  }
]

db.Collection
  .remove({})
  .then(() => db.Collection.collection.insertMany(collectionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });