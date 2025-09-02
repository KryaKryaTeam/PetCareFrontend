export interface ParamOauthGoogle {
  client_id: string
  redirect_uri: string
  response_type: string
  scope: string
}
export interface GoogleAuthFragment {
  accessToken: string | null
  tokenType?: string | null
  expiresIn?: string | null
  scope?: string | null
  authUser?: string | null
  prompt?: string | null
}
