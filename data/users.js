import bcrypt from "bcryptjs";

const users = [
  {
    id: 1,
    email: "test@example.com",
    password: bcrypt.hashSync("password123", 10),
    name: "Himanshu",
    role: "admin",
  },
  {
  id: 2,
  email: "user@example.com",
  password: bcrypt.hashSync("duke987337", 10),
  name: "Test User",
  role: "user"
},
];

export default users;