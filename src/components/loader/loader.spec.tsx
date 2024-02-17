// Commented out the test cases as I need to install the testing library and jest
/* import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../loader';

describe('Loader', () => {
  it('renders the loader component', () => {
    const { getByTestId } = render(<Loader></Loader>);
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('displays the loading text', () => {
    const { getByText } = render(<Loader>{"Loading..."}</Loader>);
    const loadingTextElement = getByText('Loading...');
    expect(loadingTextElement).toBeInTheDocument();
  });
}); */
