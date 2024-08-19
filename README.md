# aws-lambda-api
User Data Management System

## Overview
This project implements a user data storage and search system using AWS services. It allows users to store and search for data through a serverless architecture.

## AWS Services Used
1. DynamoDB: Stores user data with attributes such as UserID, Name, Skills, Company, and Domain.
2. Lambda: Executes functions for adding user data and querying the database.
3. IAM Role: To give permission
4. API Gateway: Provides REST API endpoints to interact with Lambda functions.

## Expected Output

** Store User Data: A successful response when adding data will return a message: {"message": "User added successfully"}.
** Search User Data: A successful search will return a list of matching users in JSON format. In case of errors, a message with details will be returned.
