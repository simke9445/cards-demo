import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { default as ConnectedThirdPage } from './index'; 
import translations from '../../translations';
import configureStore from 'redux-mock-store';
import { LOCALES } from '../../constants';
import { Card, Page } from '../../components';
import ThirdPage from './ThirdPage';

it('ThirdPage renders without crashing', () => {
  const wrapper = shallow(
    <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
      <ThirdPage/>        
    </IntlProvider>
  );

  expect(wrapper).toMatchSnapshot();
})

it('ConnectedThirdPage renders without crashing', () => {
  const initialState = { user: { locale: LOCALES.EN }, page: { index: 3 } };
  const store = configureStore()(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
        <ConnectedThirdPage/>        
      </IntlProvider>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(Page).length).toEqual(1);
  expect(wrapper.find(Card).length).toEqual(1);
  expect(wrapper.find(Page).prop('pageIndex')).toEqual(3);
  expect(wrapper.find(Page).prop('hasPrevious')).toEqual(true);
  expect(wrapper.find(Page).prop('hasNext')).toEqual(true);
  expect(wrapper.find(Card).prop('hasNavigation')).toBeUndefined();
  expect(wrapper.find('div.half-circle').length).toEqual(1);
  expect(wrapper.find('div.half-circle-rotated').length).toEqual(1);
  expect(wrapper.find(Card).prop('hasTooltip')).toEqual(true);
  expect(wrapper.find('button.pt-button').length).toEqual(2);
});
