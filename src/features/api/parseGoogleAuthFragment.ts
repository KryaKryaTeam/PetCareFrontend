import type { GoogleAuthFragment } from "../@types/apiInterfaces";

export default function parseGoogleAuthFragment(): GoogleAuthFragment {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = hashParams.get("access_token");
  console.log(accessToken);
  return { accessToken }
}
