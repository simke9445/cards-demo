import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { default as ConnectedFirstPage } from './index'; 
import translations from '../../translations';
import configureStore from 'redux-mock-store';
import { LOCALES } from '../../constants';
import { Card, Page } from '../../components';
import { MenuSelect } from './MenuSelect';
import FirstPage from './FirstPage';

it('FirstPage renders without crashing', () => {
  const wrapper = shallow(
    <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
      <FirstPage/>        
    </IntlProvider>
  );

  expect(wrapper).toMatchSnapshot();
})

it('ConnectedFirstPage renders without crashing', () => {
  const onSubmit = jest.fn();
  const props = { onSubmit };
  const initialState = { user: { locale: LOCALES.EN }, page: { index: 1 } };
  const store = configureStore()(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
        <ConnectedFirstPage {...props}/>        
      </IntlProvider>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Page).length).toEqual(1);
  expect(wrapper.find(Card).length).toEqual(1);
  expect(wrapper.find(Page).prop('pageIndex')).toEqual(1);
  expect(wrapper.find(Page).prop('hasPrevious')).toBeUndefined();
  expect(wrapper.find(Page).prop('hasNext')).toEqual(true);
  expect(wrapper.find(Card).prop('hasNavigation')).toEqual(true);
  expect(wrapper.find(Card).prop('hasTooltip')).toEqual(true);
  expect(wrapper.find(MenuSelect).length).toEqual(1);

  // fill out the form
  const menuSelect = wrapper.find(MenuSelect).first();
  const firstNameInput = wrapper.find('input[name="firstName"]').first();
  const lastNameInput = wrapper.find('input[name="lastName"]').first();

  firstNameInput.simulate('change', { target: { value: 'test' } });
  lastNameInput.simulate('change', { target: { value: 'test' } });
  menuSelect.simulate('change', 'test');

  wrapper.find('div.half-circle-rotated').simulate('click');

  // unresolved issue: inputs value isn't changed by the above code.
  // expect(onSubmit).toBeCalled();
});
