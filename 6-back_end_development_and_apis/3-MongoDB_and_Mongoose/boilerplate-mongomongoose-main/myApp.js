require('dotenv').config();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

mongoose.connect(process.env.MONGO_URI);

const schema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
})

let Person = model("Person", schema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Aitor",
    age: 22,
    favoriteFoods: ['Rice']
  })
  
  person.save(function(err, data){
    if (err) return console.error(err);
    done(null, data);
  });
};

const arrayOfPeople = [{
  name: "Aitor",
  age: 22,
  favoriteFoods: ['Rice']
},{
  name: "Menta",
  age: 32,
  favoriteFoods: ['Pasta']
},
{
  name: "Tilla",
  age: 34,
  favoriteFoods: ['Pizza']
}];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) =>{
    done(null, people);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, person) =>{
    done(null, person);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, person) =>{
    done(null, person);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) =>{
    done(null, person);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) =>{
    person.favoriteFoods.push(foodToAdd);
    person.save((error, updatedPerson)=>{
      done(null, updatedPerson);
    });
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, person) =>{
    done(null, person);
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, person) =>{
    done(null, person);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;