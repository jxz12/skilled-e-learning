const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const users = [];

export function register(username, password) {
  if (username in users) {
    return false;
  }
  users[username] = password;
  return true;
}
export function login(username, password) {
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
