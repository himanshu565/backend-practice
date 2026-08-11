import bcrypt from "bcryptjs";

const users = [
  {
    id: 1,
    email: "test@example.com",
    password: bcrypt.hashSync("password123", 10),
    name: "Himanshu",
  },
];

export default users;