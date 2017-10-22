import { handleActions } from "redux-actions";
import { LOCALES } from '../constants/locales';
import * as actions from '../actions/user';

const defaultState = {
    locale: LOCALES.EN,
};

export default handleActions(
    {
        [actions.setLocale]: (state, { payload: { locale } }) => ({ ...state, locale }),
    },
    defaultState,
);