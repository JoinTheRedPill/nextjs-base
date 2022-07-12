const AuthPayload = `AuthPayload {
  user { _id, name, surname, email, roles, image, emailVerified, terms }, token, refreshToken, tokenExpiry
}`;

const GenericError = `GenericError {
  code, message, description
}`;

const AuthQueries = {
  AUTHENTICATE: `mutation Authenticate ($rfToken: String) {
    authenticate (rfToken: $rfToken) {
      __typename
      ...on ${AuthPayload}
      ...on ${GenericError}
    }
  }`,
  REFRESH_TOKEN: `mutation RefreshToken ($rfToken:String!) {
    refreshToken(rfToken: $rfToken) {
      __typename
      ...on ${AuthPayload}
      ...on ${GenericError}
    }
  }`,
  DELETE_TOKEN: `mutation DeleteToken ($rfToken: String!) {
    deleteToken(rfToken: $rfToken) {
      __typename
      ...on GenericResult { result }
      ...on ${GenericError}
    }
  }`,
};

export default AuthQueries;
