import flatten from 'flat';
import { addLocaleData } from 'react-intl';

import enLocale from 'react-intl/locale-data/en';

import { LOCALES } from '../constants/locales';

import en from './en.json';

addLocaleData([...enLocale]);

export default {
	[LOCALES.EN]: flatten(en),
};
