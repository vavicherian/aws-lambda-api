## AWS Lambda Function Setup in AWS Console

### 1. Create a New Lambda Function

1.   - In the AWS Management Console, search for "Lambda" in the search bar and select it.

## **Create a New Function (Adduser)**:
   - Click on the "Create function" button.

   3. **Configure Function Settings**:
   - **Function Name**: Enter a name for your function (Adduser).
   - **Runtime**: Select the node.js runtime for your function.
   - **Role**: 
     - **Use an existing role**: Select DynamoDBandLambda IAM role which was created.
   - Click "Create function".

   ### 2. Add Code to the Lambda Function

1. **Edit the Function Code**:
   - Choose your code entry method:
     - **Edit code inline**: Enter your code directly in the inline editor and deploy.

2. **Add Layers** created for aws-sdk

### Test the Lambda Function

1. **Create a Test Event**:
      - Click on "Test" to configure a test event.
   - Enter an event name and provide sample event data.

2. **Run the Test**:
   - Click "Test" to execute the function with the provided test event.
   - Review the execution results, including logs and any output.

