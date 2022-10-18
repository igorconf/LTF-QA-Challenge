# LTF QA Challenge
This is a project that contains some automated tests of the login page of a web application called "Learn-to-Fly". The sub-topics below describe some decisions made in structuring the project.
## Technologies
- Cypress

## How to install the project dependencies

`npm install`

run cypress 

`npm run test`

## Automated Tests
Tests to validate:

 - UI components
 - Button
 - Functionalities

## Notes
-  Login validation with blank, false, invalid and valid credentials
-  Validating login using Google Authentication was not possible to execute because it does not have the environment variables (tokens) - [Google Authentication - cypress docs](https://docs.cypress.io/guides/end-to-end-testing/google-authentication#Using-the-Google-OAuth-2-0-Playground-to-Create-Testing-Credentials)
- Validation of the link to forgot password page