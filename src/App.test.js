// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OracleFeed title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OracleFeed/i);
    expect(titleElement).toBeInTheDocument();
});
