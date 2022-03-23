let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Bevs", { useNewUrlParser: true });
let data = require("./beverage-data.json");

const Bevs = mongoose.model(
  "bevs",
  new mongoose.Schema({
    "beverage-name": String,
    brand: String,
    "beverage-type": String,
    "contains-sugar": Boolean,
    carbonated: Boolean,
    container: String,
  })
);

Bevs.deleteMany({})
  .then((res) => {
    return Bevs.create(data);
  })
  .then((bevs) => {
    console.log(bevs);
    process.exit();
  });
