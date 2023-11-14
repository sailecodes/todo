import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-white-drk);

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--color-primary);
  }

  .landing--element-container {
    position: relative;
    bottom: 8rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 30rem;
    width: 100%;
  }

  .landing--img {
    width: 80rem;

    margin-bottom: 8rem;
  }

  .landing--element-container p:nth-child(1) {
    font-size: 15rem;
    font-weight: 600;
    letter-spacing: -10px;
  }

  .landing--element-container p:nth-child(2) {
    position: relative;
    bottom: 5.6rem;

    font-size: 4rem;
  }

  .landing--btn-container {
    position: relative;
    bottom: 4rem;

    display: flex;
    gap: 5rem;

    margin-top: 1rem;
  }

  .landing--btn {
    color: var(--color-black);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 12rem;
    height: 5rem;

    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;

    border-radius: 18px;

    transition: background-color 0.3s ease-out;
  }

  .landing--btn-login {
    border: 2.5px solid var(--color-primary-400);
  }

  .landing--btn-login:hover {
    background-color: var(--color-primary-400);
  }

  .landing--btn-register {
    background-color: var(--color-primary-400);
  }

  .landing--btn-register:hover {
    background-color: var(--color-primary-300);
  }
`;

export default Wrapper;
