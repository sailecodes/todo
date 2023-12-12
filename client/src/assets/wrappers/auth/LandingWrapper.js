import styled from "styled-components";

const LandingWrapper = styled.section`
  background-color: var(--color-white);
  color: var(--color-black);

  display: grid;
  place-items: center;

  height: 100vh;

  padding: 2rem;

  .landing--title {
    font-size: var(--font-auth-heading-sm);
    font-weight: 600;
    text-align: center;
    letter-spacing: -2px;
  }

  .landing--tag {
    width: 30rem;

    font-size: var(--font-auth-subheading-sm);
    text-align: center;

    margin-bottom: 4rem;
  }

  .landing--tag span {
    color: var(--color-primary);
  }

  .landing--link-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .landing--link-container a {
    display: grid;
    place-items: center;

    height: var(--button-height-sms);
    width: 8rem;

    font-size: var(--font-auth-text-sm);
    font-weight: 500;

    border-radius: 7.5px;
  }

  .landing--link-container a:nth-child(1) {
    color: var(--color-black);

    border: 1px solid var(--color-black);
  }

  .landing--link-container a:nth-child(2) {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  @media (min-width: 570px) {
    .landing--title {
      font-size: var(--font-auth-heading-lg);
    }

    .landing--tag {
      width: auto;

      font-size: var(--font-auth-subheading-lg);
    }

    .landing--link-container a {
      height: var(--button-height-lgs);
      width: 11rem;

      font-size: var(--font-text-lgs);
    }
  }
`;

export default LandingWrapper;
