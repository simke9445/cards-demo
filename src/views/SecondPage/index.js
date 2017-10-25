import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

import { SecondPage } from './SecondPage';
import { setPage } from '../../actions';
import { getPage } from '../../selectors';
import { validate } from '../../utils';

const EnhancedSecondPage = compose(
  connect(
    state => ({ pageIndex: getPage(state) }),
    dispatch => ({
      onSubmit: (index) => dispatch(setPage({ index })),
      onPrevious: (index) => dispatch(setPage({ index })),
    }),
    (stateProps, dispatchProps) => ({
      ...stateProps,
      ...dispatchProps,
      onSubmit: () => dispatchProps.onSubmit(stateProps.pageIndex + 1),
      onPrevious: () => dispatchProps.onPrevious(stateProps.pageIndex - 1),
    }),
  ),
  reduxForm({
    form: 'cards',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  }),
)(SecondPage);

export default EnhancedSecondPage;
