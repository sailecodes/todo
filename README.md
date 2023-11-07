# **TODO App**

### _Server-side logic_

- General structure
  - Authentication routes (`/api/v1/auth`)
    - Public routes
    - 3 routes:
      - Register (_POST_, `/api/v1/auth/register`)
        - Must validate input values
          - i.e. first & last name, email, and password
            - Check if email already exists in the database
          - Use `express-validator` package for validation
            - Alternatively can use `mongoose` Schema validation
        - Controller
          - Store the password as a hashed string
            - Use `bcryptjs` package for hashing
      - Login (_POST_, `/api/v1/auth/login`)
        - Must validate login values
          - i.e. email and password
          - Use `express-validator` package for validation
        - Controller
          - Check if user with email exists
          - Check password against user's password in db
          - Create a JWT and embed it in a http-cookie for authentication
      - Logout (_GET_, `/api/v1/auth/logout`)
        - Controller
          - Reset the http-cookie to clear the JWT
    - Todo routes (`/api/v1/todos`)
      - Restricted routes
        - Must pass an authentication layer that verifies the JWT in the http-cookie
      - Further validation
        - After passing the authentication layer, the POST and PATCH routes must pass todo and query param validations
      - 5 routes
        - Get all todos (_GET_, `/api/v1/todos`)
        - Create a todo (_POST_, `/api/v1/todos`)
        - Get a todo (_GET_, `/api/v1/todos/:id`)
        - Update a todo (_PATCH_, `/api/v1/todos/:id`)
        - Delete a todo (_DELETE_, `/api/v1/todos/:id`)
- Models
  - User Schema
    - First name
    - Last name
    - Email
    - Password
    - Role
  - Todo Schema
    - Title
    - Description
    - Deadline
    - Created by

### _Client-side logic_

- Structure
