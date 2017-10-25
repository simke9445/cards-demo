import React, { Component } from 'react';

import { Page, Card } from '../../components';
import { Icon } from "@blueprintjs/core";
import { Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';

const styles = {
  header: {
    height: '25%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  controls: {
    height: '30%',
    justifyContent: 'space-around',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '16px',
    backgroundColor: 'white',
    color: '#A06FEF',
  },
  icon: {
    fontSize: '4em',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    color: '#A06FEF',
  },
  buttonIcon: {
    color: '#A06FEF',
  }
}

export class SecondPage extends Component {
  render() {
    const { handleSubmit, pageIndex, onPrevious } = this.props;

    return (
      <Page 
        hasNext={true}
        onNext={handleSubmit}
        hasPrevious={true}
        onPrevious={onPrevious}
        pageIndex={pageIndex}
      >
        <Card
          onNext={handleSubmit}
          hasNavigation={true}
        >
          <div style={styles.header}>
            <Icon iconName="help" style={styles.icon}/>
            <h4><FormattedMessage id={'page2.content'}/></h4>
          </div>
          <div className="pt-control-group pt-vertical" style={styles.controls}>
            <Field name="sex" component={({ input }) =>
              <button onClick={() => input.onChange("Male") || handleSubmit()} type="button" className="pt-button pt-large" style={styles.button}>
                <FormattedMessage id={'page2.button.male'}/>
                <Icon iconName="arrow-top-right" style={styles.buttonIcon}></Icon>
              </button>
            }>
            </Field>
            <Field name="sex" component={({ input }) =>
              <button onClick={() => input.onChange("Female") || handleSubmit()} type="button" className="pt-button pt-large" style={styles.button}>
                <FormattedMessage id={'page2.button.female'}/>
                <Icon iconName="arrow-down" style={styles.buttonIcon}></Icon>
              </button>
            }>
            </Field>
          </div>
        </Card>
      </Page>
    );
  }
}