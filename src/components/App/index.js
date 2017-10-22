import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { Provider as ReduxProvider } from "react-redux";

import { getLocale } from '../../selectors';
import translations from '../../translations';

import { App } from "./App";

import { configureStore } from "./configureStore";

const IntlApp = ( { locale, messages } ) => (
	<IntlProvider locale={locale} messages={messages}>
		<App/>
	</IntlProvider>
);

const ConnectedIntlApp = connect(
	state => {
		const locale = getLocale(state);
		const messages = translations[locale];

		console.log(locale, messages, translations);

		return { locale, messages };
	},
	null, null, { pure: false },
)(IntlApp);

const store = configureStore();

export default () => (
    <BrowserRouter>
        <ReduxProvider store={store}>
            <ConnectedIntlApp/>
        </ReduxProvider>
    </BrowserRouter>
)