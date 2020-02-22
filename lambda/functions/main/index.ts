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
export async function handler(event: AWSLambda.APIGatewayProxyEvent): Promise<AWSLambda.APIGatewayProxyResult> {
  try {
    return response(200, CONFIG);
  } catch (e) {
    return response(500, e.message);
  }
};

/**
 * Gets a valid API Gateway response
 * @param {Number} statusCode Http Status code
 * @param {Object} body Object that will be sent as request response. This will be parsed with JSON.stringify
 * @return {AWSLambda.APIGatewayProxyResult} API Gateway response
 */
function response(statusCode: number, body?:any): AWSLambda.APIGatewayProxyResult {
  return {
    statusCode,
    body : JSON.stringify(body || ''),
  };
}
export default handler;
