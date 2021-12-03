import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../../components/Calculator';
import Home from '../../components/Home';
import Myself from '../../components/Myself';

describe('Pages', () => {
  it('Should render HomePage', async () => {
    render(<Home />);
    expect(screen.getByText('Welcome to MathMagicians')).toBeInTheDocument();
  });

  it('Should render CalculatorPage', async () => {
    render(<Calculator />);
    expect(screen.getByText('Lets do some Math!')).toBeInTheDocument();
  });

  it('Should render QuotePage', async () => {
    render(<Myself />);
    expect(screen.getByText('Dear Math Lovers')).toBeInTheDocument();
  });
});