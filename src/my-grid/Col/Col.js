import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Col.scss';

class Col extends Component {
  render() {
    const classes = classNames({
      [`col-xs-${this.props.xs}`]: this.props.xs,
      [`col-sm-${this.props.sm}`]: this.props.sm,
      [`col-sml-${this.props.sml}`]: this.props.sml,
      [`col-md-${this.props.md}`]: this.props.md,
      [`col-mdl-${this.props.mdl}`]: this.props.mdl,
      [`col-lg-${this.props.lg}`]: this.props.lg,
      [`col-lgl-${this.props.lgl}`]: this.props.lgl,
      [`col-xl-${this.props.xl}`]: this.props.xl,
      [`offset-xs-${this.props.xsOffset}`]: this.props.xsOffset,
      [`offset-sm-${this.props.smOffset}`]: this.props.smOffset,
      [`offset-sml-${this.props.smlOffset}`]: this.props.smlOffset,
      [`offset-md-${this.props.mdOffset}`]: this.props.mdOffset,
      [`offset-mdl-${this.props.mdlOffset}`]: this.props.mdlOffset,
      [`offset-lg-${this.props.lgOffset}`]: this.props.lgOffset,
      [`offset-lgl-${this.props.lglOffset}`]: this.props.lglOffset,
      [`offset-xl-${this.props.xlOffset}`]: this.props.xlOffset,
      'hidden-xs': this.props.xsHidden,
      'hidden-sm': this.props.smHidden,
      'hidden-sml': this.props.smlHidden,
      'hidden-md': this.props.mdHidden,
      'hidden-mdl': this.props.mdlHidden,
      'hidden-lg': this.props.lgHidden,
      'hidden-lgl': this.props.lglHidden,
      'hidden-xl': this.props.xlHidden,
      'shown-xs': this.props.xsShown,
      'shown-sm': this.props.smShown,
      'shown-sml': this.props.smlShown,
      'shown-md': this.props.mdShown,
      'shown-mdl': this.props.mdlShown,
      'shown-lg': this.props.lgShown,
      'shown-lgl': this.props.lglShown,
      'shown-xl': this.props.xlShown,
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

const columnProps = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf(['auto', 'contentWidth']),
]);

const guttersSize = PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  sml: columnProps,
  md: columnProps,
  mdl: columnProps,
  lg: columnProps,
  lgl: columnProps,
  xl: columnProps,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  smlOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  mdlOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  lglOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  xsHidden: PropTypes.bool,
  smHidden: PropTypes.bool,
  smlHidden: PropTypes.bool,
  mdHidden: PropTypes.bool,
  mdlHidden: PropTypes.bool,
  lgHidden: PropTypes.bool,
  lglHidden: PropTypes.bool,
  xlHidden: PropTypes.bool,
  xsShown: PropTypes.bool,
  smShown: PropTypes.bool,
  smlShown: PropTypes.bool,
  mdShown: PropTypes.bool,
  mdlShown: PropTypes.bool,
  lgShown: PropTypes.bool,
  lglShown: PropTypes.bool,
  xlShown: PropTypes.bool,
  gutters: guttersSize,
  smGutters: guttersSize,
  mdGutters: guttersSize,
  lgGutters: guttersSize,
  xlGutters: guttersSize,
  classes: PropTypes.string
};

Col.defaultProps = {
  xs: 'auto'
};

export default Col;
