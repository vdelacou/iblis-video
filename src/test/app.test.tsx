import { render } from '@testing-library/react';
import React from 'react';
import App from '../app/index';

// Just be sure the app do not crash. More test can be written
test('renders testId', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('testId');
  expect(element).toBeInTheDocument();
});
