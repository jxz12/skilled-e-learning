const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const users = [];

export function register(username, password) {
  console.log(users);
  if (username in users) {
    return false;
  }
  users[username] = password;
  return true;
}
export function login(username, password) {
  console.log(users);
  if (users[username] !== password) {
    return false;
  }
  return true;
}

export function createToken(username) {
  const token = jwt.sign({ username: username }, secret, {
    expiresIn: 86400, // expires in 24 hours
  });
  return token;
};

export function verifyToken(token) {
  if (!token.startsWith("Bearer ")) {
    throw new Error("no Bearer in header");
  }
  // Remove Bearer from string
  token = token.slice(7, token.length).trimLeft();
  if (!token) {
    throw new Error("no token after Bearer");
  }
  return jwt.verify(token, secret);
}
