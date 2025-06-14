import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection Component', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  test('renders the main heading', () => {
    expect(screen.getByRole('heading', { name: /John Doe - Web Developer & Designer/i })).toBeInTheDocument();
  });

  test('renders the introductory paragraph', () => {
    expect(screen.getByText(/Creating modern and responsive web applications/i)).toBeInTheDocument();
  });

  test('renders the call-to-action button', () => {
    expect(screen.getByRole('button', { name: /Explore My Work/i })).toBeInTheDocument();
  });
});
