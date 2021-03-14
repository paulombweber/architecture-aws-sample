async function something(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'This is Service A/xpto' }),
  };
}

export const handler = something;


