import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { default as ConnectedFourthPage } from './index'; 
import translations from '../../translations';
import configureStore from 'redux-mock-store';
import { LOCALES } from '../../constants';
import { Card, Page } from '../../components';
import FourthPage from './FourthPage';

it('FourthPage renders without crashing', () => {
  const formValue = { test };
  const wrapper = shallow(
    <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
      <FourthPage formValue={formValue}/>        
    </IntlProvider>
  );

  expect(wrapper).toMatchSnapshot();
})

it('ConnectedFourthPage renders without crashing', () => {
  const values = { test };
  const initialState = {
    user: { locale: LOCALES.EN },
    page: { index: 4 },
    form: {
      cards: {
        values,
      },
    },
  };
  const store = configureStore()(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <IntlProvider messages={translations[LOCALES.EN]} locale={LOCALES.EN}>
        <ConnectedFourthPage/>        
      </IntlProvider>
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(FourthPage).prop('formValue')).toEqual(values);  
  expect(wrapper.find(Page).length).toEqual(1);
  expect(wrapper.find(Card).length).toEqual(1);
  expect(wrapper.find(Page).prop('pageIndex')).toEqual(4);
  expect(wrapper.find(Page).prop('hasPrevious')).toEqual(true);
  expect(wrapper.find(Page).prop('hasNext')).toBeUndefined();
  expect(wrapper.find(Card).prop('hasNavigation')).toBeUndefined();
  expect(wrapper.find('div.half-circle').length).toEqual(1);
  expect(wrapper.find('div.half-circle-rotated').length).toEqual(1);
  expect(wrapper.find(Card).prop('hasTooltip')).toBeUndefined();
});
