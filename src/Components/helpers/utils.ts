import AWS from 'aws-sdk'; 
import awsmobile from "../../aws-exports";

export function getAmplifyEnv() {
  // if we don't have aws_user_files_s3_bucket in awsmobile we can use something else that includes the env name
  let envStartIndex = awsmobile.aws_user_files_s3_bucket.lastIndexOf('-');
  let env = awsmobile.aws_user_files_s3_bucket.slice(envStartIndex + 1);
  return env;
}

// the following funtion may need to be changed in the future,
// may be we will find that we should change how lambda return it's response or how we sent it a request
// or may we find better way to get amplify env
export async function invokeLambda(functionName: string, requestBody: any) {
  try {
    AWS.config.region = awsmobile.aws_cognito_region;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: awsmobile.aws_cognito_identity_pool_id,
    });
    let lambda = new AWS.Lambda();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    };

    let response = await lambda
      .invoke({
        FunctionName: `${functionName}-${getAmplifyEnv()}`,
        Payload: JSON.stringify(options),
      })
      .promise();

    let payload: any;
    let body: any;
    if (response.Payload) {
      if (typeof response.Payload === 'string') {
        payload = JSON.parse(response.Payload);
      } else {
        console.log(response);
        throw new Error('the payload is not of type string');
      }
    }

    if (payload.body) {
      if (typeof payload.body === 'string') {
        body = JSON.parse(payload.body);
        return body;
      } else {
        console.log(response);
        throw new Error('the body is not of type string');
      }
    } else {
      return payload;
    }
  } catch (error) {
    console.error('Error invoking lambda function:', error);
  }
}