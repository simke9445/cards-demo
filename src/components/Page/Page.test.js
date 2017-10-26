import React from 'react';
import Page from './Page';
import { shallow } from 'enzyme';

it('Page renders without crashing', () => {
  const pageIndex = 1;
  const onNext = jest.fn();
  const onPrevious = jest.fn();

  const wrapper = shallow(
    <Page 
      pageIndex={pageIndex}
      hasNext={true}
      hasPrevious={true}
      onNext={onNext}
      onPrevious={onPrevious}
    ></Page>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('div.half-circle').length).toEqual(1);
  expect(wrapper.find('div.half-circle-rotated').length).toEqual(1);
  wrapper.find('div.half-circle').simulate('click');
  expect(onPrevious).toBeCalled();
  wrapper.find('div.half-circle-rotated').simulate('click');
  expect(onNext).toBeCalled();
});
