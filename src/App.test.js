import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = createRoot(document.createElement('div'));
  div.render(<App />);
});
