import AWS from 'aws-sdk';
const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const handler = async (event) => {
    const params = event.queryStringParameters || {};
    
    let filterExpressions = [];
    let expressionAttributeValues = {};

    if (params.skills) {
        filterExpressions.push('contains(Skills, :skills)');
        expressionAttributeValues[':skills'] = params.skills;
    }

    if (params.company) {
        filterExpressions.push('Company = :company');
        expressionAttributeValues[':company'] = params.company;
    }

    if (params.domain) {
        filterExpressions.push('Domain = :domain');
        expressionAttributeValues[':domain'] = params.domain;
    }

    const scanParams = {
        TableName: 'UserTable',
        FilterExpression: filterExpressions.length > 0 ? filterExpressions.join(' AND ') : undefined,
        ExpressionAttributeValues: Object.keys(expressionAttributeValues).length > 0 ? expressionAttributeValues : undefined
    };

    try {
        const data = await dynamoDB.scan(scanParams).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify('Error searching users: ' + error.message)
        };
    }
};

