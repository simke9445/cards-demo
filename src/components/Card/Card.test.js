import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import { Icon, Tooltip } from '@blueprintjs/core';

it('Card renders without crashing', () => {
  const tooltipMessage = 'test';
  const onNext = jest.fn();
  const wrapper = shallow(
    <Card 
      hasNavigation={true} 
      onNext={onNext}
      hasTooltip={true}
      tooltipMessage={tooltipMessage}
    ></Card>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Icon).length).toEqual(1);
  wrapper.find(Icon).simulate('click');
  expect(onNext).toHaveBeenCalled();
  expect(wrapper.find(Tooltip).length).toEqual(1);
  expect(wrapper.find(Tooltip).prop('content')).toEqual(<em>{tooltipMessage}</em>);
});
