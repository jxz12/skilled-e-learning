const auth = require("../auth");

export async function GET(request) {
  verified = auth.verifyToken(request.token);
  if (verified) {
    return Response.json([
      { title: "cute cat video", url: "youtube.com/123" },
      { title: "funny dog video", url: "youtube.com/456" },
    ]);
  } else {
    return Response.json(
      "not authorized, could not verify token",
      { status: 403 },
    );
  }
}