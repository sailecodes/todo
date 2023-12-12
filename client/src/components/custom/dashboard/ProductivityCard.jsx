import styled from "styled-components";

const ProductivityCard = ({ title, stat, total, statIcon }) => {
  return (
    <ProductivityCardWrapper>
      <header>
        <div className="productivity-card--square-icon"></div>
        <p className="productivity-card--title">{title}</p>
      </header>
      <div>
        <div>
          <p className="productivity-card--stat">
            {stat} <span>todos</span>
          </p>
          <p className="productivity-card--total">out of {total}</p>
        </div>
        <p className="productivity-card--icon">{statIcon}</p>
      </div>
    </ProductivityCardWrapper>
  );
};

const ProductivityCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: var(--color-primary);
  color: var(--color-white);

  width: 30rem;
  height: 15rem;

  padding: 1.5rem;
  border-radius: 8px;

  > header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .productivity-card--square-icon {
    background-color: var(--color-white);

    width: var(--font-subheading-sm);
    height: var(--font-subheading-sm);

    border-radius: 5px;
  }

  .productivity-card--title {
    font-size: var(--font-subheading-sm);
    font-weight: 500;
  }

  .productivity-card--stat {
    font-size: var(--font-heading-sm);
  }

  > div {
    display: flex;
    align-items: center;
  }

  .productivity-card--total {
    font-size: var(--font-text-sm);
  }

  .productivity-card--icon {
    font-size: var(--size-icon-sm);

    margin-left: auto;
  }

  @media (min-width: 425px) {
    gap: 2.3rem;

    width: 35rem;
    height: 20rem;

    .productivity-card--square-icon {
      width: var(--font-subheading-lg);
      height: var(--font-subheading-lg);
    }

    .productivity-card--title {
      font-size: var(--font-subheading-lg);
    }

    .productivity-card--stat {
      font-size: var(--font-heading-lg);
    }

    > div {
      display: flex;
      align-items: center;
    }

    .productivity-card--total {
      font-size: var(--font-text-lg);
    }

    .productivity-card--icon {
      font-size: var(--size-icon-lg);
    }
  }

  @media (min-width: 600px) {
    align-self: flex-end;

    width: auto;
  }
`;

export default ProductivityCard;
