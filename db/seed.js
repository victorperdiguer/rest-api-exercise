require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Import data to seed

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    // Code to insert elements in DB
  })
  .then((created) => {
    // Confirmation
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })