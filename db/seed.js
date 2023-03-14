require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Show = require('../models/Show');

// Import data to seed
const seed = [
  {
    title: "The Simpsons",
    creator: "Matt Groening",
    launched: 1989,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
  },
  {
    title: "How I Met Your Mother",
    creator: "Random dude",
    launched: 2005,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "Ted Mosby sucks"
  },
  {
    title: "The Friends",
    creator: "Obviously someone better than HIMYM's creator",
    launched: 1991,
    genre: "comedy",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "HIMYM but better"
  },
  {
    title: "Game of Thrones",
    creator: "Dumb Benioff and Dumber Weiss",
    launched: 1989,
    genre: "thriller",
    image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
    description: "This excellent series unfortunately never came to an end, as everybody involved in its production died after the show's 6th season."
  }
]

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    return Show.create(seed);
  })
  .then((created) => {
    console.log("everything is cool");
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })