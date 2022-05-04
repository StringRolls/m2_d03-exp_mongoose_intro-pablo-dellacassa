// import/require the model
const Cat = require('./models/Cat.model');
// const Cat = require("./models/Cat.model.js"); => you don't have to use ".js"

// CONNECT YOUR APP TO THE MONGODB
require('./configs/database.config');

// ****************************************************************************************************
// ****************************************************************************************************
// Deleting cats from DB
// ----------------------------------------------------------------------------

Cat
  // .findByIdAndRemove() works the same as .findByIdAndDelete()
  .findByIdAndDelete('5d48d2676ca362daa1ced681')
  .then(deletedCat => console.log(`Deleted cat with id: ${deletedCat._id}`))
  .catch(err => console.log('Error while deleting one cat: ', err));

// Remove all cats named Garfield
Cat.deleteMany({ name: 'Garfield' })
  .then(deletedCats => {
    console.log('deleted: ', deletedCats);
    // deletedCats.forEach(oneCat =>  console.log(`Deleted cat with id: ${oneCat._id}`));
  })
  .catch(err => console.log('Error while deleting one cat: ', err));

// Remove one cat named Garfield
Cat.deleteOne({ name: 'Garfield' })
  .then(deletedCat => {
    console.log('deleted: ', deletedCat);
    // deletedCats.forEach(oneCat =>  console.log(`Deleted cat with id: ${oneCat._id}`));
  })
  .catch(err => console.log('Error while deleting one cat: ', err));
