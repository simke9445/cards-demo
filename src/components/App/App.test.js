import React from 'react';
import App from './App';
import { ConnectedIntlApp, IntlApp } from './index';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LOCALES } from '../../constants';

it('App renders without crashing', () => {
  const wrapper = shallow(
    <App page={1}/>
  );

  expect(wrapper).toMatchSnapshot();
});

it('App-Intl renders without crashing', () => {
  const wrapper = shallow(
    <IntlApp locale={'en'} messages={{ message: 'message' }} page={1}/>
  );

  expect(wrapper).toMatchSnapshot();
});

it('App-Connected-Intl renders & mounts without crashing', () => {
  const initialState = { user: { locale: LOCALES.EN }, page: { index: 1 } };
  const store = configureStore()(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedIntlApp/>      
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(ConnectedIntlApp).length).toEqual(1);
  expect(wrapper.find(IntlProvider).length).toEqual(1);
  expect(wrapper.find(IntlProvider).prop('locale')).toEqual(LOCALES.EN);
  expect(wrapper.find(App).length).toEqual(1);
  expect(wrapper.find(App).prop('page')).toEqual(1);
});