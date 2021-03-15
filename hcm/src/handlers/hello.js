async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Link to some API portal' }),
  };
}

export const handler = hello;


