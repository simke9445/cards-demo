import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

import ThirdPage from './ThirdPage';
import { setPage } from '../../actions';
import { getPage } from '../../selectors';
import { validate } from '../../utils';

const EnhancedThirdPage = compose(
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
  injectIntl,
)(ThirdPage);

export default EnhancedThirdPage;
