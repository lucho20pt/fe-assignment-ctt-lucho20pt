import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

const mockProducts = [
  {
    id: '1',
    stock: 10,
    description: 'Product 1',
    categories: ['A'],
    price: 19.99,
  },
  {
    id: '2',
    stock: 5,
    description: 'Product 2',
    categories: ['B'],
    price: 29.99,
  },
];

test('ProductList renders without crashing', () => {
  const { container } = render(<ProductList products={mockProducts} />);
  expect(container).toBeInTheDocument();
});

test.skip('ProductList renders product descriptions if data exists', () => {
  render(<ProductList products={mockProducts} />);
  expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
});

test('ProductList handles empty data gracefully', () => {
  render(<ProductList products={[]} />);
  expect(screen.queryByText(/Product 1/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Product 2/i)).not.toBeInTheDocument();
});