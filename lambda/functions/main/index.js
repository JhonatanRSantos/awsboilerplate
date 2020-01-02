/**
 * Main handler
 *
 * @method GET
 * @alias index
 * @alias /
 *
 * @param {AWSLambda.APIGatewayEvent} event The AWS lambda event.
 * @return {Promise<AWSLambda.APIGatewayProxyResult>} The AWS lambda response.
 */
export const handler = async (event) => {
  return {
    statusCode : 200,
    body       : JSON.stringify({
      message : 'Serverless Boilerplate!',
    }),
  };
};

export default {handler};
