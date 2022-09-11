import { render, screen } from '@testing-library/react';
import App from './App';

test('renders carrier', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vodafone/i);
  expect(linkElement).toBeInTheDocument();
});