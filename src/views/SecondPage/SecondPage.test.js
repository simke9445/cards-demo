import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { default as ConnectedSecondPage } from './index'; 
import translations from '../../translations';
import configureStore from 'redux-mock-store';
import { LOCALES } from '../../constants';
import { Card, Page } from '../../components';
import SecondPage from './SecondPage';

it('SecondPage renders without crashing', () => {
  const wrapper = shallow(
    <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
      <SecondPage/>        
    </IntlProvider>
  );

  expect(wrapper).toMatchSnapshot();
})

it('ConnectedSecondPage renders without crashing', () => {
  const initialState = { user: { locale: LOCALES.EN }, page: { index: 2 } };
  const store = configureStore()(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
        <ConnectedSecondPage/>        
      </IntlProvider>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Page).length).toEqual(1);
  expect(wrapper.find(Card).length).toEqual(1);
  expect(wrapper.find(Page).prop('pageIndex')).toEqual(2);
  expect(wrapper.find(Page).prop('hasPrevious')).toEqual(true);
  expect(wrapper.find(Page).prop('hasNext')).toEqual(true);
  expect(wrapper.find(Card).prop('hasNavigation')).toEqual(true);
  expect(wrapper.find('div.half-circle').length).toEqual(1);
  expect(wrapper.find('div.half-circle-rotated').length).toEqual(1);
  expect(wrapper.find(Card).prop('hasTooltip')).toBeUndefined();
  expect(wrapper.find('button.pt-button').length).toEqual(2);
});
