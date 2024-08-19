## API Gateway Setup in AWS Console

## API Gateway Setup in AWS Console

This section documents the steps to configure API Gateway in the AWS Console. The setup includes creating a new API, configuring resources and methods, and integrating with Lambda functions.

### 1. Creation of a New API

1. Log in to AWS Console

2. Navigate to API Gateway:
   - In the AWS Management Console, search for "API Gateway" in the search bar and select it.

3. Click on the "Create API" button.
   - Select "REST API" and click on "Build" under the "REST API" option.

4. Configure API Settings:
   - Enter an API name (UserAPI).
   - Choose "New API" and click "Create API".

### 2. Configure Resources and Methods

1. **Create a Resource**:
   - In the left sidebar, click on "Resources".
   - Click on the "Actions" dropdown and select "Create Resource".
   - Enter the resource name (/users).
   - Click "Create Resource".

2. **Add Methods to the Resource**:
   - Select the newly created resource (e.g., `/users`).
   - Click on "Create Method".

  - Select "Lambda Function" as the integration type.
  - Check the box for "Use Lambda Proxy integration".
  - Enter the Lambda function name (SearchUser) and click on create.

4. **Repeat for above step for POST**:

### 3. Deploy the API

1. **Create a Deployment Stage**:
   - Click on  "Deploy API".
   - Enter a deployment stage name (Deploy).
   - Click "Deploy".

   2. **Access the API Endpoint**:
   - After deployment, you will see an "Invoke URL" which you can use to access your API.
   - Copy the URL and test the endpoints using tools like Postman or curl.

   ### 4. Test the API

