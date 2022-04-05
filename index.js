const express = require("express");
const app = express();
const port = 8000;
// cnx bd
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://data:data@cluster0.p4k6a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("data is connect"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// creation du model
const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favorieFood: [String],
});
const PersonModel = mongoose.model("person", personSchema);
// creation d'un model  b .create

PersonModel.create(
  {
    name: "ysf",
    age: 29,
    favorieFood: ["fyu", "yf"],
  },
  function (err, small) {
    if (err) return handleError(err);
    // saved!
  }
);
// creation d'un model  b  save
// instance
const d1 = new PersonModel({
  name: "amn",
  age: 9,
});
d1.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
// creation de plusieurs records  b .create

PersonModel.create(
  [
    {
      name: "1",
      age: 29,
      favorieFood: ["fyu", "yf"],
    },
    {
      name: "2",
      age: 29,
      favorieFood: ["fyu", "yf"],
    },
    {
      name: "2",
      age: 29,
      favorieFood: ["f", "yf"],
    },
  ],
  function (err, small) {
    if (err) return handleError(err);
    // saved!
  }
);
//find
// PersonModel.find({ name: "2" }, (err, person) =>
//   err ? console.log(err) : console.log(person)
// );
//findone
// const favfood = ["f", "yf"];
// PersonModel.findOne({ fnavorieFood: favfood }, (err, person) =>
//   err ? console.log(err) : console.log(person)
// );

PersonModel.findById("624c182a62bf8114bb367956", function (err, adventure) {
  err ? console.log(err) : console.log(adventure);
});
