const auth = require("../auth");
import { headers } from 'next/headers'

const videos = {
  jonathan: [
    { title: "cute cat video", url: "youtube.com/123" },
    { title: "funny dog video", url: "youtube.com/456" },
  ],
  halden: [
    { title: "impressive bird video", url: "youtube.com/789" },
  ],
};

export async function GET() {
  const headersList = headers();
  const token = headersList.get('authorization');
  try {
    const payload = auth.verifyToken(token);
    const username = payload["username"];
    return Response.json(videos[username]);
  } catch (error) {
    return Response.json(
      error,
      { status: 403 },
    );
  }
}