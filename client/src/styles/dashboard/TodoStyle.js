import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 2rem 0 0 2rem;

  nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10rem;
    gap: 3.5rem;
  }
`;

export default Wrapper;
