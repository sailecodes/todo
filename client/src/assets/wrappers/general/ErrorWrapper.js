import styled from "styled-components";

const ErrorWrapper = styled.p`
  color: var(--color-black);

  font-size: var(--font-error-sms);
  font-weight: 600;

  @media (min-width: 425px) {
    font-size: var(--font-error-lgs);
  }
`;

export default ErrorWrapper;
