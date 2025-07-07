export default function getGoogleOAuthUrl(): string {
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  const params = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: `${window.location.origin}/app/board`,
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
  };

  const queryString = new URLSearchParams(params).toString();
  return `${oauth2Endpoint}?${queryString}`;
}
