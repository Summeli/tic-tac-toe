import React from 'react';
import { render, screen } from '@testing-library/react';
import GameBoard from '../GameBoard'

test('renders at least something', () => {
  const setParty = (party: boolean) => {
   };

    render(<GameBoard setParty={setParty}/>);
  });

