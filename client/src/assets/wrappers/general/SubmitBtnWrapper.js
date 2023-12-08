import styled from "styled-components";

const SubmitBtnWrapper = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);

  height: var(--button-height-sms);
  width: 8rem;

  font-size: var(--font-text-sms);

  border-radius: 7.5px;

  @media (min-width: 425px) {
    height: var(--button-height-lgs);
    width: 11rem;

    font-size: var(--font-text-lgs);
  }
`;

export default SubmitBtnWrapper;
