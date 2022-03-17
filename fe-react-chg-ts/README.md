# Frontend Code Test

Hey :wave:, thanks for taking the time to do our technical test!

## Task

Your goal is to build a product called Application Form. This product will dynamically generate a form based on data received from an API using React.

There are three banks requesting an Application Form:

- Bank of Azeroth
- Naboo Bank
- Middle Earth Bank
- 
![image](https://user-images.githubusercontent.com/42133841/158845038-673c6198-63c5-4db7-bb7f-0c7e9333565b.png)

![image](https://user-images.githubusercontent.com/42133841/158845399-a3608b8d-0558-4809-808c-b3a922ff3680.png)

![image](https://user-images.githubusercontent.com/42133841/158845505-040640ff-7d00-4f5f-99d9-10145488e220.png)

![image](https://user-images.githubusercontent.com/42133841/158845632-1612f7b0-62fb-40fe-a8d1-e05f21d27fc3.png)

![image](https://user-images.githubusercontent.com/42133841/158845878-f8f602a6-081b-4e86-8c13-c0997f5c0757.png)
or
![image](https://user-images.githubusercontent.com/42133841/158845804-cbb8ceff-f160-4701-9701-151a3028831f.png)


## Pre-requisites

1. Git
2. Node: any 12.x version starting with v12.0.0 or greater
3. Yarn: See [Yarn](https://yarnpkg.com/getting-started/install) website for installation instructions
4. A clone of the frontend-code-test repo on your local machine

## Installation

```bash
yarn install
```

to install the website's npm dependencies

## Running the project

```bash
yarn dev
```

to start the development server (powered by [NextJS](https://nextjs.org/))

### Requirements

```
As a user
When I go to /:lender-name
I want to see the form for the lender
So that I can apply for a bank loan
```

```
As a user
When I submit the form
I want to know if I was accepted or declined
```

### REST APIs

```json
// GET /api/lenders/:lender-name
{
  "name": "Bank of Azeroth",
  "fields": [
    "first_name",
    "last_name",
    "gender",
    "email",
    "phone_number",
    "monthly_income"
  ]
}

// POST /api/lenders/:lender-name

// Request
{
  "first_name": "Ann",
  "last_name": "Heselden",
  "gender": "female",
  "email": "ann.heselden@divido.com",
  "phone_number": "+447473468883",
  "monthly_income": 50000
}

// Response
{
  "decision": "accepted",
}
```

## UX and Design

It’s entirely up to you how you would like to design the Application Form! Feel free to use 3rd party tools like `emotion` or `material-ui` (already installed as a dependency).

## Testing

```bash
yarn test:cypress
```

will run our Cypress tests.

Feel free to add some more end-to-end cypress tests, or present what tests you would add if you had more time.
