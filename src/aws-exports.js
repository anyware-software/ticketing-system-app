/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-2",
    "aws_cloud_logic_custom": [
        {
            "name": "AdminQueries",
            "endpoint": "https://6wjpwf9u2g.execute-api.us-east-2.amazonaws.com/dev",
            "region": "us-east-2"
        }
    ],
    "aws_appsync_graphqlEndpoint": "https://75wkwnytsbhb3evudpnrf62vlq.appsync-api.us-east-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-dalpfppgufdencrnvbcbdd72nm",
    "aws_cognito_identity_pool_id": "us-east-2:01e251dd-f95e-4cd8-b5a9-3c71acfd019b",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_LM8Y8ZLxZ",
    "aws_user_pools_web_client_id": "46c7o1dcaii500l76n0u3ukng4",
    "oauth": {
        "domain": "ticketingsystemadminbe039a90-be039a90-dev.auth.us-east-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL",
        "PHONE_NUMBER"
    ],
    "aws_cognito_social_providers": [
        "FACEBOOK"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
