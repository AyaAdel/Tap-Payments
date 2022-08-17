import React from 'react';
import renderer from 'react-test-renderer';
// import { RenderComponent } from 'utils/test/render';
import App from '../App';

function MyComponent() {
  return (
    // <RenderComponent>
    <App />
    // </RenderComponent>
  );
}

it('Render App Correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
