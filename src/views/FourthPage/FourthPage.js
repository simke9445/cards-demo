import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Page, Card } from '../../components';

const styles = {
  pre: {
    textAlign: 'start',
  },
};

const selections = ['title'];

export class FourthPage extends Component {
  static propTypes = {
    formValue: PropTypes.object.isRequired,
  }

  render() {
    const { pageIndex, onPrevious, formValue, intl } = this.props;

    const parsedFormValue = Object.keys(formValue)
      .filter(key => selections.indexOf(key) !== -1)
      .map(key => ({ [key]: intl.formatMessage({ id: formValue[key] }) }))
      .reduce((acc, curr) => ({ ...acc, ...curr }), formValue);

    return (
      <Page
        hasPrevious={true}
        onPrevious={onPrevious}
        pageIndex={pageIndex}
      >
        <Card>
          <pre style={styles.pre}><code>{JSON.stringify(parsedFormValue, null, 2)}</code></pre>
        </Card>
      </Page>
    );
  }
}