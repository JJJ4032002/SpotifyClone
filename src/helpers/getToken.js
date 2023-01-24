import { Buffer } from "buffer";
const client_id = "cc28a8f065324d06b2b26c2a03c7e1c2";
async function getToken(code, redirect_uri) {
  let token = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          client_id + ":" + "37446065c2994bc3a261d49118ccb0b1"
        ).toString("base64"),

      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return token;
}

export default getToken;
