const mongoose = require("mongoose");

mongoose
  .connect(
      "mongodb+srv://triumfavdyli6:triumf123@fma-node.dvftp.mongodb.net/week3",
    {
    
    }
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

  const userSchema = new mongoose.Schema(
    {name: {type:String, require: true},
    email: {type: String, require: true, unique: true},
    age: {type: Number,}}
  );

  const User = mongoose.model("User", userSchema);

  
// const user = new User({
//   name: "James Bond",
//   email: "james0047@gmail.com",
//   age: 43,
// });

// user
//   .save()
//   .then((user) => console.log("User created", user))
//   .catch((err) => console.log("Error creating user", err));

// User.find().then((users) => console.log("All users:", users)).catch((err) => console.error("Error fetching users:", err));

// User.findByIdAndUpdate("66e8717612a167283dd244ab", { age: 31 }).then((users) => console.log("Update update:", users)).catch((err) => console.error("Error updating user:", err));

// User.findByIdAndDelete("66e87289ce8238844e104654")
//   .then((user) => console.log("Deleted user:", user))
//   .catch((err) => console.error("Error deleting user:", err));

// Create an array of 25 users
const users = [
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "Bob", email: "bob@example.com", age: 30 },
  { name: "Charlie", email: "charlie@example.com", age: 35 },
  { name: "David", email: "david@example.com", age: 40 },
  { name: "Eve", email: "eve@example.com", age: 28 },
  { name: "Frank", email: "frank@example.com", age: 33 },
  { name: "Grace", email: "grace@example.com", age: 27 },
  { name: "Hank", email: "hank@example.com", age: 36 },
  { name: "Ivy", email: "ivy@example.com", age: 24 },
  { name: "Jack", email: "jack@example.com", age: 22 },
  { name: "Karen", email: "karen@example.com", age: 45 },
  { name: "Leo", email: "leo@example.com", age: 31 },
  { name: "Mandy", email: "mandy@example.com", age: 29 },
  { name: "Nick", email: "nick@example.com", age: 38 },
  { name: "Olivia", email: "olivia@example.com", age: 32 },
  { name: "Paul", email: "paul@example.com", age: 26 },
  { name: "Quincy", email: "quincy@example.com", age: 34 },
  { name: "Rachel", email: "rachel@example.com", age: 37 },
  { name: "Sam", email: "sam@example.com", age: 23 },
  { name: "Tina", email: "tina@example.com", age: 41 },
  { name: "Uma", email: "uma@example.com", age: 30 },
  { name: "Victor", email: "victor@example.com", age: 33 },
  { name: "Wendy", email: "wendy@example.com", age: 39 },
  { name: "Xander", email: "xander@example.com", age: 28 },
  { name: "Yvonne", email: "yvonne@example.com", age: 29 }
];

// Insert the users into the database
// User.insertMany(users)
//   .then(() => {
//     console.log('Users inserted successfully');
//     mongoose.connection.close(); // Close the connection after insert
//   })
//   .catch(err => {
//     console.log('Error inserting users: ', err);
//     mongoose.connection.close();
//   });

  const page = 2;
  const limit = 5;


    User.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .then((users) => console.log("Paginated users:", users))
    .catch((err) => console.error("Error fetching paginated users:", err));


