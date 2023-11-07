# **TODO App**

### _Server-side logic_

- Structure
  - Authentication routes (`/api/v1/auth`)
    - Public routes
    - 3 routes:
      - Register
        - Must validate input values
          - i.e. first & last name, email, and password
            - Check if email already exists in the database
          - Use `express-validator` package for validation
        - Controller
          - Store the password as a hashed string
            - Use `bcryptjs` package for hashing
      - Login
        - Must validate login values
          - i.e. email and password
          - Use `express-validator` package for validation
        - Controller
          - Check if user with email exists
          - Check password against user's password in db
          - Create a JWT and embed it in a http-cookie for authentication
      - Logout
        - Controller
          - Reset the http-cookie to clear the JWT

### _Client-side logic_

- Structure
