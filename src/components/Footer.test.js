import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders copyright symbol', () => {
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });

  test('renders current year', () => {
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear, "i"))).toBeInTheDocument();
  });

  test('renders "Your Name" placeholder', () => {
    // Using a regex to be flexible with surrounding text like "© 2024 Your Name"
    expect(screen.getByText(/Your Name/i)).toBeInTheDocument();
  });

  test('renders "All Rights Reserved" text', () => {
    expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();
  });
});
