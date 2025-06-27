const User = require("./models/User");
const { fakerES: faker } = require("@faker-js/faker");
const { mongoose } = require("./models/index");

async function userSeeder(params) {
  await mongoose.connection.dropCollection("users");
  const users = [];

  for (let i = 0; i < 20; i++) {
    const user = new User({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 60 }),
    });
    // await user.save();
    users.push(user);
  }
  await User.insertMany(users);
  console.log("se corrio el seeder de usuarios");
  process.exit(0);
}

userSeeder();
