import { combineReducers } from 'redux';

import user from './user';
import page from './page';

import { reducer as form } from 'redux-form';

export default combineReducers({
    user,
    page,
    form,
});
