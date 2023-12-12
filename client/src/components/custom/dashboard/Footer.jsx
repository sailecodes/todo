import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: none;

  @media (min-width: 1440px) {
    display: unset;

    padding: 2rem;

    p {
      font-size: var(--font-text-lg);
      color: var(--color-primary);
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    a {
      font-size: var(--font-text-lg);
      text-decoration: underline;
    }

    a,
    .dot-dividers {
      color: var(--color-primary);
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>A todo application to help organize your tasks. Check out my other stuff (or me):</p>
      <div>
        <a
          href="https://github.com/sailecodes"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </a>
        <div className="dot-dividers">&middot;</div>
        <a
          href="https://www.linkedin.com/in/elias-roman-38440028b/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        <div>&middot;</div>
        <a
          href="https://eliasiv-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          Portfolio
        </a>
      </div>
    </FooterWrapper>
  );
};
export default Footer;
