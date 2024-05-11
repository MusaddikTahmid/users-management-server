const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Sabana",
    email: "sabana@gmail.com",
  },
  {
    id: 2,
    name: "Shabnoor",
    email: "shabnoor@gmail.com",
  },
  {
    id: 3,
    name: "Sabila",
    email: "sabila@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("users management surver is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
