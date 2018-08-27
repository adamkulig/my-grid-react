import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Container.scss';

class Container extends Component {
  render() {
    const classes = classNames({
      container: !this.props.fluid,
      'container-fluid': this.props.fluid,
      [this.props.classes]: this.props.classes
    });
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool,
  classes: PropTypes.string
};

Container.defaultProps = {
  fluid: false
};

export default Container;
