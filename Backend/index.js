const express = require("express");
const User = require("./models/user.model");
const Post = require("./models/post.model");
const dotenv = require("dotenv");
dotenv.config();
const ObjectID = require("mongodb").ObjectID;
const connect = require("./config/db");
const colors = require("colors");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("./routes/user.route");
const sendmailRoute = require("./routes/sendmail.route");
const { faker } = require("@faker-js/faker");
// const faker = require("faker");
const postRoute = require("./routes/post.route");
const morgan = require("morgan");
connect();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// app.post("/api/createFakeNGOData", (req, res) => {
//   const data = [];
//   for (let i = 0; i < 10; i++) {
//     const obj = {
//       name: faker.name.firstName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//       description: faker.lorem.paragraph(),
//       profilePic: faker.image.avatar(),
//       certificate: faker.image.avatar(),
//       role: "ngo",
//       instagram: faker.internet.url(),
//       facebook: faker.internet.url(),
//       twitter: faker.internet.url(),
//       phone: faker.phone.number(),
//       address: faker.address.streetAddress(),
//       city: faker.address.city(),
//       state: faker.address.state(),
//       pincode: faker.address.zipCode(),
//       bankName: faker.finance.accountName(),
//       accountNumber: faker.finance.account(),
//       ifscCode: faker.finance.iban(),
//       physicalVerificationDate: faker.date.future(),
//       physicalVerificationStatus: Math.random() > 0.5 ? "verified" : "pending",
//       reviews: [
//         {
//           user: ObjectID(),
//           review: faker.lorem.paragraph(),
//         },
//       ],
//     };
//     data.push(obj);
//   }
//   User.insertMany(data)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

// app.post("/api/createFakePostData", (req, res) => {
//   const data = [];
//   for (let i = 0; i < 10; i++) {
//     const obj = {
//       title: faker.lorem.sentence(),
//       area: faker.address.city(),
//       workRequirement: faker.lorem.paragraph(),
//       uploadedBy: ObjectID(),
//       timings: faker.date.future(),
//       interested: [
//         {
//           user: ObjectID(),
//         },
//       ],
//     };
//     data.push(obj);
//   }
//   Post.insertMany(data)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
app.use("/api/user", userRoute);
app.use("/api/sendmail", sendmailRoute);
app.use("/api/post", postRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`.green.bgMagenta);
});
