// HINT: You may need more than one model for this data set!
let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Super", { useNewUrlParser: true });
let data = require("./superheroes.json");
const moviesScheme = new mongoose.Schema({
  title: String,
  year: Number,
  characters: [
    {
      name: String,
      alias: Boolean,
      actor: String,
    },
    {
      name: String,
      alias: Boolean,
      actor: String,
    },
  ],
});

const Super = mongoose.model(
  "super",
  new mongoose.Schema({
    universe: String,
    movies: [moviesScheme],
  })
);

Super.deleteMany({})
  .then((res) => {
    console.log(res.deletedCount);
    return Super.create(data);
  })
  .then((e) => {
    console.log(e);
    process.exit();
  });
