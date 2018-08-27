import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Row.scss';

class Row extends Component {
  render() {
    const classes = classNames({
      row: true,
      [`xs-gutters-${this.props.gutters}`]: this.props.gutters,
      [`sm-gutters-${this.props.smGutters}`]: this.props.smGutters,
      [`md-gutters-${this.props.mdGutters}`]: this.props.mdGutters,
      [`lg-gutters-${this.props.lgGutters}`]: this.props.lgGutters,
      [`xl-gutters-${this.props.xlGutters}`]: this.props.xlGutters,
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
