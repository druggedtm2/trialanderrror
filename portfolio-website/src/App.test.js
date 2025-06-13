import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header navigation link "About"', () => {
  render(<App />);
  // The App component already includes BrowserRouter
  const aboutLinkElement = screen.getByRole('link', { name: /About/i });
  expect(aboutLinkElement).toBeInTheDocument();
});

test('renders hero section heading on the home page', () => {
  render(<App />);
  // Check for the hero section heading, assuming default route is Home
  // This test might be more specific if routes were explicitly managed here
  const heroHeading = screen.getByText(/John Doe - Web Developer & Designer/i);
  expect(heroHeading).toBeInTheDocument();
});
