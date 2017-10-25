import React, { Component } from 'react';

import { Page, Card } from '../../components';
import { Icon } from '@blueprintjs/core';
import { Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';

const styles = {
  icon: {
    fontSize: '4em',
    color: '#A06FEF',    
  },
  header: {
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '8px',
    width: '35%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '16px',
    backgroundColor: 'white',
  },
  buttonIconYes: {
    color: '#22DD4E',
  },
  buttonIconNo: {
    color: '#DB3B55',
  }
}

export class ThirdPage extends Component {
  render() {
    const { handleSubmit, pageIndex, onPrevious, intl } = this.props;

    return (
      <Page
        hasNext={true}
        onNext={handleSubmit}
        hasPrevious={true}
        onPrevious={onPrevious}
        pageIndex={pageIndex}
      >
        <Card
          hasTooltip={true}
          tooltipMessage={intl.formatMessage({ id:"page3.tooltip" })}
        >
          <div style={styles.header}>
            <Icon iconName="home" style={styles.icon}></Icon>
            <h4><FormattedMessage id={'page3.content'}/></h4>
          </div>
          <div className="pt-control-group pt-horizontal" style={styles.controls}>
            <Field name="ukResident" component={({ input }) => 
              <button
                onClick={() => input.onChange("No") || handleSubmit()}
                type="button"
                className="pt-button pt-large"
                style={styles.button}
              >
                <FormattedMessage id={'page3.button.no'}/>
                <Icon iconName="delete" style={styles.buttonIconNo}></Icon>
              </button>
            }/>
            <Field name="ukResident" component={({ input }) => 
              <button 
                onClick={() => input.onChange("Yes") || handleSubmit()}
                type="button"
                className="pt-button pt-large"
                style={styles.button}
              >
                <FormattedMessage id={'page3.button.yes'}/>
                <Icon iconName="endorsed" style={styles.buttonIconYes}></Icon>
              </button>
            }/>
          </div>
        </Card>
      </Page>
    );
  }
}