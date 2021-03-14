async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'This is service B' }),
  };
}

export const handler = hello;


