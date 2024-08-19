import AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);
        const { UserID, Name, Skills, Company, Domain } = requestBody;

        const params = {
            TableName: 'UserTable',
            Item: {
                UserID: UserID,
                Name: Name,
                Skills: Skills,
                Company: Company,
                Domain: Domain
            }
        };

        await dynamoDb.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'User added successfully' })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error adding user', error: error.message })
        };
    }
};

