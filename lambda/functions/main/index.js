// Get all environment variables
const CONFIG = process.env.CONFIG ? JSON.parse(process.env.CONFIG) : {};

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
    body       : JSON.stringify(CONFIG),
  };
};

export default {handler};
