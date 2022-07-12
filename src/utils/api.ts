import { getSession, signOut } from "next-auth/react";
import { GraphQLClient, gql } from "graphql-request";

import { endpoint, errors, getQuery, isPublicQuery } from "constants/api";

const client = new GraphQLClient(endpoint || "");

export const fetch = async (
  queryName: string,
  variables = {},
  headers: any = null
) => {
  const session = await getSession();
  const token: string = `${session?.accessToken}`;

  const queryStr = getQuery(queryName);

  const isPublic = isPublicQuery(queryName);
  if (!isPublic) {
    setAuthToken(token);
  }

  if (!!headers) {
    client.setHeaders(headers);
  }

  try {
    const data = await client.request(
      gql`
        ${queryStr}
      `,
      variables
    );

    const { __typename, ...error } = data[Object.keys(data)[0]];
    if (["GenericError"].indexOf(__typename) >= 0) {
      throw error;
    }
    return data;
  } catch (error: any) {
    // Controlled error
    if (error.hasOwnProperty("code")) {
      if (error.code === errors.USER_NOT_AUTHENTICATED) {
        signOutAndDeleteToken();
        return;
      } else {
        throw error;
      }
    }
    // Uncontrolled error
    const { response = {} } = JSON.parse(JSON.stringify(error, undefined, 2));
    const undefinedError = {
      code: errors.UNDEFINED,
      message: response.errors ? response.errors[0].message : "Undefined error",
      description: null,
    };
    throw undefinedError;
  }
};

export const signOutAndDeleteToken = async () => {
  try {
    const session = await getSession();
    const rfToken = session?.refreshToken;
    await fetch("DELETE_TOKEN", { rfToken });
  } catch (error) {
    console.error("ERROR DELETING SESSION", error);
  }
  signOut();
};

export const setAuthToken = (token: string) => {
  client.setHeaders({
    authorization: `Bearer ${token}`,
  });
};
