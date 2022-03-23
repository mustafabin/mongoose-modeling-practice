let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/PenPal", { useNewUrlParser: true });
let data = require("./penpals.json");

const Pens = mongoose.model(
  "pen",
  new mongoose.Schema({
    to: String,
    from: String,
    message: String,
    sentOn: Date,
  })
);

Pens.deleteMany({})
  .then((res) => {
    console.log(res.deletedCount);
    return Pens.create(data);
  })
  .then((pens) => {
    console.log(pens);
    process.exit();
  });
