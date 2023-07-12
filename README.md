 # Cloud Collections

Cloud Collections is a single-page web application built using React, AWS Lambda, API Gateway, SQS, and RDS. It allows users to submit their information, which is then stored in a RDS database for further processing.

## Features

- User-friendly interface for submitting information
- Clean and responsive design
- Integration with AWS services for data storage and processing

## Technologies Used

- React: JavaScript library for building the user interface
- AWS Lambda: Serverless computing service for running backend code
- API Gateway: AWS service for creating and managing APIs
- Amazon SQS: Message queue service for decoupling components and enabling asynchronous processing
- Amazon RDS: Relational database service for storing form data

## Setup and Deployment

1. Clone the repository:

```
git clone 
```

2. move to the directory:

```
cd cloud-collections
```

3. Install dependencies:

```
npm install
```

4. Running application:

```
npm start
```

## Architecture

The application follows a client-server architecture with the following components:

- `Frontend`: The whole user interface is built with ReactJs . It handles user interactions, displays data, and makes API requests to the backend.

- `Backend`: The backend is composed of AWS services:

- API Gateway: Serves as the RESTful API endpoint for the frontend, allowing communication between the frontend and backend Lambda functions.
- Lambda Functions: AWS Lambda functions handle the CRUD operations and interact with the MySQL-RDS database.
- SQS: Simple Queue Service is used for asynchronous processing. After successful collection item creation or update, Lambda functions publish messages to an SQS queue.
- RDS: Relational Database Service is used to store and manage collection item data.

Here's an overview of the flow:

The frontend sends HTTP requests to API Gateway endpoints.
API Gateway routes the requests to the corresponding Lambda functions.
Lambda functions perform the requested operations on the RDS database.
After a successful collection item creation or update, Lambda functions publish messages to an SQS queue.
Separate Lambda functions process the messages in the SQS queue asynchronously.


![AWS Interactions](https://github.com/Rkvishnu/cloud-collections/raw/main/aws-interactions.png)