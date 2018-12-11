import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactCalulator from './components/calculator';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calculator renders correctly', () => {
  const calc = renderer
    .create(<ReactCalulator />)
    .toJSON();
  expect(calc).toMatchSnapshot();
});
