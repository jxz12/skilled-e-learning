const auth = require("../auth");

export async function POST(request) {
  const data = await request.json();
  const username = data["username"];
  const password = data["password"];

  if (!auth.register(username, password)) {
    return Response.json(
      "user already exists, please login",
      { status: 403 },
    );
  }
  return Response.json("successfully registered");
}
