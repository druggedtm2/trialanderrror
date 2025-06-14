import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test('renders site title', () => {
    expect(screen.getByText(/My Portfolio/i)).toBeInTheDocument();
  });

  test('renders Home navigation link', () => {
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
  });

  test('renders About navigation link', () => {
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
  });

  test('renders Portfolio navigation link', () => {
    expect(screen.getByRole('link', { name: /Portfolio/i })).toBeInTheDocument();
  });

  test('renders Resume navigation link', () => {
    expect(screen.getByRole('link', { name: /Resume/i })).toBeInTheDocument();
  });

  test('renders Contact navigation link', () => {
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });
});
