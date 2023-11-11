import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 33rem;
  gap: 3.5rem;

  height: 98rem;

  overflow-y: scroll;
`;

export default Wrapper;
