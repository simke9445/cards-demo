import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Icon } from '@blueprintjs/core';

import "./Page.css";

const styles = {
  topBar: {
    height: '7.5%',
    width: '90%',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  empty: {
    width: '20%',
    visibility: 'hidden',
  },
  topBarHeader: {
    width: '20%',
    paddingLeft: '14px',
    textAlign: 'left',
    color: '#B2B6B9',
  },
  progressBarContainer: {
    width: '60%',
  },
  progressBarMeter: {
    display: 'flex',
    backgroundColor: '#A06FEF',
  },
  contentContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  halfCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  leftArrow: {
    fontSize: '3em',
    color: 'white',
    transform: 'translate(-10px)',
  },
  rightArrow: {
    fontSize: '3em',
    color: 'white',
    transform: 'translate(-10px)',
  }
}

const Page = ({ children, hasNext, hasPrevious, pageIndex, onNext, onPrevious }) => 
  <div style={styles.container}>
    <div className="pt-callout" style={styles.topBar}>
      <h3 style={styles.topBarHeader}><FormattedMessage id={'page.title'}/></h3>
      <div style={styles.progressBarContainer}>
        <div className="pt-progress-bar pt-no-stripes">
          <div className="pt-progress-meter" style={{ ...styles.progressBarMeter, width: `${100*pageIndex/4}%` }}></div>
        </div>
      </div>
      <div style={styles.empty}>{null}</div>
    </div>
    <div style={styles.contentContainer}>
      <div className="half-circle" style={styles.halfCircle} onClick={hasPrevious ? onPrevious : null}>
        <Icon iconName="chevron-left" style={styles.leftArrow}/>
      </div>
        {children}
      <div className="half-circle-rotated" style={styles.halfCircle} onClick={hasNext ? onNext : null}>
        <Icon iconName="chevron-left" style={styles.rightArrow}/>
      </div>
    </div> 
  </div>

Page.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
};

export default Page;