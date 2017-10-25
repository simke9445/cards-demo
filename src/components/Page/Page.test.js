import React from 'react';
import { Page } from './Page';
import { shallow } from 'enzyme';

it('Page renders without crashing', () => {
  const wrapper = shallow(<Page pageIndex={1}></Page>
  );

  expect(wrapper).toMatchSnapshot();
});
