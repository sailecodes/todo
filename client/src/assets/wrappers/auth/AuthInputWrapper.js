import styled from "styled-components";

const AuthInputWrapper = styled.div`
  position: relative;

  input {
    font-size: var(--font-text-sms);

    height: 3rem;
    width: 25.7rem;

    padding: 0 1rem;
    border: 1px solid var(--color-border-outline);
    border-radius: 7.5px;
  }

  svg {
    position: absolute;
    right: 3%;
    bottom: 12%;

    width: 2.2rem;
    height: 2.2rem;
  }

  @media (min-width: 425px) {
    input {
      font-size: var(--font-text-lgs);

      height: 4rem;
      width: 34.5rem;
    }

    svg {
      right: 2.3%;
      bottom: 17%;

      width: 2.6rem;
      height: 2.6rem;
    }
  }
`;

export default AuthInputWrapper;
