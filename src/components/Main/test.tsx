import { render, screen } from '@testing-library/react';

import Main from '.';

describe(`<Main />`, () => {
  it(`should render the heading`, () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: /react com nextjs/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /just another boilerplate/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByAltText(/Imagem de um átomo e texto React Avançado/i)
    ).toContainHTML(`/img/logo.svg`);

    expect(
      screen.getByAltText(
        `Imagem de pessoa em frente de computador com três telas com código`
      )
    ).toContainHTML(`/img/hero-illustration.svg`);

    expect(container.firstChild).toMatchSnapshot();
  });

  it(`should render the colors correctly`, () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    });
  });
});
