import { handleActions } from "redux-actions";
import * as actions from '../actions/page';

const defaultState = {
    index: 1,
};

export default handleActions(
    {
        [actions.setPage]: (state, { payload: { index } }) => ({ ...state, index }),
    },
    defaultState,
);