async function something(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'This is Service A/something' }),
  };
}

export const handler = something;


