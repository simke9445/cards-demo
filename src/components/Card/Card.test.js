import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

it('Card renders without crashing', () => {
  const wrapper = shallow(
    <Card hasNavigation={true} onNext={() => null}>
      <div>test</div>
    </Card>
  );

  expect(wrapper).toMatchSnapshot();
});
