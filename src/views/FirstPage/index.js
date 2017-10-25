import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { compose } from 'recompose';

import FirstPage from './FirstPage';
import { setPage } from './../../actions/page';
import { getPage } from '../../selectors';
import { validate } from '../../utils';

const EnhancedFirstPage = compose(
  connect(
    state => ({ pageIndex: getPage(state) }),
    dispatch => ({
      onSubmit: (index) => dispatch(setPage({ index })),
    }),
    (stateProps, dispatchProps) => ({
      ...stateProps,
      ...dispatchProps,
      onSubmit: () => dispatchProps.onSubmit(stateProps.pageIndex + 1),
    }),
  ),
  reduxForm({
    form: 'cards',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, 
    validate,
  }),
  injectIntl,
)(FirstPage);

export default EnhancedFirstPage;

