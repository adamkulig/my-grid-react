import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Row.scss';

class Row extends Component {
  render() {
    const classes = classNames({
      row: true,
      [`gutters-xs-${this.props.gutters}`]: this.props.gutters,
      [`gutters-sm-${this.props.smGutters}`]: this.props.smGutters,
      [`gutters-md-${this.props.mdGutters}`]: this.props.mdGutters,
      [`gutters-lg-${this.props.lgGutters}`]: this.props.lgGutters,
      [`gutters-xl-${this.props.xlGutters}`]: this.props.xlGutters,
      [this.props.classes]: this.props.classes
    });
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

const guttersSize = PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']);

Row.propTypes = {
  gutters: guttersSize,
  smGutters: guttersSize,
  mdGutters: guttersSize,
  lgGutters: guttersSize,
  xlGutters: guttersSize,
  classes: PropTypes.string
};

Row.defaultProps = {
  gutters: 'sm'
};

export default Row;
