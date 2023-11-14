import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 12px;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  form label {
    font-size: 2.5rem;
  }

  input {
    height: 2.5rem;
    width: 30rem;

    font-size: 1.5rem;

    padding-left: 0.5rem;
    border: 1px solid var(--color-black);
    border-radius: 5px;
  }

  .form-select--container {
    display: flex;
    gap: 5rem;
  }

  button {
    width: 10rem;
    height: 5rem;

    font-size: 2rem;

    border: 1px solid var(--color-black);
    border-radius: 8px;
  }
`;

export default Wrapper;
