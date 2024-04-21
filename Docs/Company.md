#### API Documentation for Company

##### Login Endpoint

- **Endpoint**: POST /api/company/login
- **Description**: This endpoint is used for user login.
- **Request Body**:
  - email (string, required): The email of the user.
  - password (string, required): The password of the user.
- **Response**:
  - 200 OK: If the login is successful, the response will include a message "Login successful" and an access token.
    - Example Response:
      ```json
      {
        "message": "Login successful",
        "access_Token": "<access_token>"
      }
      ```
  - 404 Not Found: If the user with the provided email is not found, the response will include an error message "User not found".
    - Example Response:
      ```json
      {
        "error": "User not found"
      }
      ```
  - 401 Unauthorized: If the provided password is incorrect, the response will include an error message "Invalid credentials".
    - Example Response:
      ```json
      {
        "error": "Invalid credentials"
      }
      ```
  - 500 Internal Server Error: If there is a server error during the login process, the response will include an error message "Server error".
    - Example Response:
      ```json
      {
        "error": "Server error"
      }
      ```

##### Signup Endpoint

- **Endpoint**: POST /api/company/signup
- **Description**: This endpoint is used for user signup.
- **Request Body**:
  - companyName (string, required): The name of the company.
  - email (string, required): The email of the user.
  - password (string, required): The password of the user.
  - yearOfEstablishment (number, required): The year of establishment of the company.
  - fieldsOfWork (array of strings, required): The fields of work of the company.
  - ShortDescription (string, required): A short description of the company.
- **Response**:
  - 201 Created: If the signup is successful, the response will include a message "User signup successfully" and the user data, including the name and access token.
    - Example Response:
      ```json
      {
        "message": "User signup successfully",
        "user": {
          "name": "<company_name>",
          "access_Token": "<access_token>"
        }
      }
      ```
  - 400 Bad Request: If a user with the same email already exists, the response will include an error message "Company already exists".
    - Example Response:
      ```json
      {
        "error": "Company already exists"
      }
      ```
  - 500 Internal Server Error: If there is a server error during the signup process, the response will include an error message "Server error".
    - Example Response:
      ```json
      {
        "error": "Server error"
      }
      ```
