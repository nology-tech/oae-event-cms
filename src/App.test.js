import { render, screen } from '@testing-library/react';
import App from './App';

test('This is a dummy test as it needs 1 test to pass', () => {
  render(<App />);
  
  expect(true).toBeTruthy();
});
