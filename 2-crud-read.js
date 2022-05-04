// import/require the model
const Cat = require('./models/Cat.model');
// const Cat = require("./models/Cat.model.js"); => you don't have to use ".js"

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Reading the cats from DB (use find(), findOne(), findById())
// ----------------------------------------------------------------------------

// .find() we are always getting array back as a response
Cat.find({ age: { $gt: 10 } })
  .then(catDoc => console.log('Found this 🐈: ', catDoc))
  .catch(err => console.log('Error while getting the cats: ', err));

// .findById() we are always getting object back as a response
Cat.findById('5d48d51c036739dace0141c8')
  .then(foundCat => console.log('Found this cat by their ID: ', foundCat))
  .catch(err => console.log('Error while getting the cats: ', err));

// Bonus: Count documents
Cat.countDocuments({ name: 'Garfield' })
  .then(total =>
    console.log('Total number of cats with name Garfield: ', total)
  )
  .catch(err => console.log('Error while counting the cats: ', err));
