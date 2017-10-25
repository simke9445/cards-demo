import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { getFormValues } from 'redux-form';
import { compose } from 'recompose';

import { FourthPage } from './FourthPage';
import { getPage } from '../../selectors';
import { setPage } from '../../actions';

const EnhancedFourthPage = compose(
  connect(
    state => ({
      formValue: getFormValues('cards')(state),
      pageIndex: getPage(state),
    }),
    dispatch => ({
      onPrevious: (index) => dispatch(setPage({ index })),
    }),
    (stateProps, dispatchProps) => ({
      ...stateProps,
      ...dispatchProps,
      onPrevious: () => dispatchProps.onPrevious(stateProps.pageIndex - 1),
    }),
  ),
  injectIntl,
)(FourthPage);

export default EnhancedFourthPage;

