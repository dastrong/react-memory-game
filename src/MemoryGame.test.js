import React from 'react';
import ReactDOM from 'react-dom';
import MemoryGame from './MemoryGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
