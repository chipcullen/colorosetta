import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// @todo restore app-level testing
test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
});
