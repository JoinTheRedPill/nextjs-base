const EmailPayload = `EmailPayload { messageId, originalMessage }`;

const GenericError = `GenericError {
    code, message, description
}`;

const EmailQueries = {
  SEND_EMAIL: `mutation SendEmail ($type: String!, $from: String!, $to: [String!]!, $cc: [String!], $bcc: [String!], $options: JSON) {
    sendEmail(input: {
      type: $type,
      from: $from,
      to: $to,
      cc: $cc,
      bcc: $bcc,
      options: $options
    }) {
      __typename
      ...on ${EmailPayload}
      ...on ${GenericError}
    }
  }`,
};

export default EmailQueries;
