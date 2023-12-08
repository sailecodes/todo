import styled from "styled-components";

const AuthWrapper = styled.section`
  background-color: var(--color-white);
  color: var(--color-b);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100vh;

  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .auth--logo {
    font-size: var(--font-heading-auth-sms);
    font-weight: 600;
    text-align: center;
    letter-spacing: -2px;
  }

  form button {
    margin-top: 0.5rem;
  }

  .auth--redirect {
    width: 25.7rem;

    font-size: var(--font-text-sms);
    text-align: center;
  }

  .auth--redirect a {
    color: var(--color-primary);
  }

  @media (min-width: 425px) {
    .auth--logo {
      font-size: var(--font-heading-auth-lgs);
      letter-spacing: -2px;
    }

    form button {
      margin-top: 1rem;
    }

    .auth--redirect {
      width: 34.5rem;

      font-size: var(--font-text-lgs);
    }
  }
`;

export default AuthWrapper;
