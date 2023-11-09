import styled from "styled-components";

const Wrapper = styled.div`
  background-color: azure;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  form {
    position: relative;

    display: flex;
    flex-direction: column;

    margin-bottom: 12rem;
  }

  .auth--logo {
    position: relative;

    font-size: 11rem;
    font-weight: 600;
    letter-spacing: -7px;
  }

  .auth--input-label {
    font-size: 2.2rem;
  }

  .auth--input {
    height: 3rem;

    font-size: 1.8rem;

    padding: 0 0.1rem 0 0.1rem;

    margin-bottom: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5rem;

    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;

    border: none;
    border-radius: 18px;

    margin-top: 1.6rem;
  }

  button:hover {
    cursor: pointer;
  }

  .auth--login-redirect {
    width: max-content;

    font-size: 1.5rem;

    margin-left: 50%;
    margin-top: 1rem;

    transform: translateX(-50%);
  }
`;

export default Wrapper;
