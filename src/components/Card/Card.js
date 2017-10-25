import React from 'react';
import { FormattedMessage } from "react-intl";
import PropTypes from 'prop-types';

import { Icon, Tooltip } from "@blueprintjs/core";

const styles = {
    container: {
      flex: '1',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
    },
    card: {
      header: {
        backgroundColor: '#A06FEF',
      },
      container: {
        width: '340px',
        height: '500px',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',     
        wordWrap: 'break-word',
        boxShadow: 'rgba(0, 0, 0, 0.14) 0px 0em 2em 2px' +
                  ', rgb(242, 242, 242) 0px 0.75em 0px -0.25em' +
                  ', rgba(0, 0, 0, 0.09) 0px 1.5em 0.1875em -0.5em' +
                  ', rgb(229, 229, 229) 0px 1em 0px -0.5em' +
                  ', rgba(0, 0, 0, 0.1) 0px 1em 0.1875em -0.5em',
      },
      content: {
        padding: '24px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      next: {
        container: {
          height: '30%',
          display: 'flex',
        },
        icon: {
          borderRadius: '50%',
          backgroundColor: '#DDDDDD',
          width: '20%',
          height: '58%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          color: 'white',
          cursor: 'pointer',
        },
      },
    },
    footer: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      backgroundColor: 'white',
      borderTop: '1px solid #DCDCDC',
    },
    tooltip: {
      color: '#AFB0B2',
    }
  };

const Card = ({ children, onNext, hasNavigation, hasTooltip, tooltipMessage }) =>     
  <div style={styles.container}>
    <div style={styles.card.container} className="pt-card pt-elevation-2">
      <div className="pt-callout" style={styles.card.header}>
        <h5 style={{ color: 'white' }}><FormattedMessage id="card.header"/></h5>
      </div>
      <div style={styles.card.content}>
        {children}
        {hasNavigation &&
          <div style={styles.card.next.container}>
            <Icon onClick={onNext} iconName="arrow-right" style={styles.card.next.icon}/>
          </div>}
      </div>
      <div className="pt-callout" style={styles.footer}>
        {hasTooltip && 
          <Tooltip
              className="pt-tooltip-indicator"
              content={
                <em>
                  {tooltipMessage}
                </em>
              }
          >
            <span style={styles.tooltip}><FormattedMessage id="card.footer"/></span>
          </Tooltip>}
      </div>
    </div>
  </div>


Card.propTypes = {
  onNext: PropTypes.func,
  hasNavigation: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  tooltipMessage: PropTypes.string,
};

export default Card;