import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Popover, MenuItem, Menu, Position } from '@blueprintjs/core';

import './MenuSelect.css';

const styles = {
  selectButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default class MenuSelect extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultOption: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isInvalid: PropTypes.bool,
  }

  handleSelect = item => {
    this.props.onChange(item);
  }

  render() {
    return (
      <Popover
        content={
          <Menu className="pt-large menu">
            {this.props.items.map((item, index) => <MenuItem className="menu-item" key={index} text={<FormattedMessage id={item} />} onClick={() => this.handleSelect(item)}/>)}
          </Menu>
        }
        position={Position.BOTTOM}>
        <button type="button" style={styles.selectButton} className={this.props.isInvalid ? "pt-button pt-fill pt-large pt-intent-danger" : "pt-button pt-fill pt-large"}>
          <FormattedMessage id={this.props.value ? this.props.value : this.props.defaultOption}/>
          <span className="pt-icon-standard pt-icon-caret-down pt-align-right"></span>
        </button>
      </Popover>
    );
  }
}
