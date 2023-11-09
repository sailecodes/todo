import styled from "styled-components";

const Wrapper = styled.div`
  background-color: azure;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .landing--element-container {
    position: relative;
    bottom: 8rem;

    background-color: brown;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 30rem;
    width: 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;

    width: 12rem;
    height: 5rem;

    font-size: 2rem;
    text-decoration: none;

    border-radius: 18px;

    transition: background-color 0.3s ease-out;
  }

  .landing--btn:hover {
    background-color: #efb495;
  }
`;

export default Wrapper;
