let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BestEvery", {
  useNewUrlParser: true,
});
let data = require("./best-everything.json");

const Best = mongoose.model(
  "best",
  new mongoose.Schema({
    year: Number,
    sports: {
      superBowl: String,
      worldSeries: String,
      stanleyCup: String,
      NBAchampionship: String,
    },
    music: {
      bestSong: {
        title: String,
        artist: String,
      },
    },
    movies: {
      bestMovie: String,
      bestActress: String,
      bestActor: String,
    },
  })
);

Best.deleteMany({})
  .then((res) => {
    console.log(res.deletedCount);
    return Best.create(data);
  })
  .then((best) => {
    console.log(best);
    process.exit();
  });
