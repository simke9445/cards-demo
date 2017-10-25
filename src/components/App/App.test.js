import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

it('App renders without crashing', () => {
  const wrapper = shallow(
    <App page={1}/>
  );

  expect(wrapper).toMatchSnapshot();
});
