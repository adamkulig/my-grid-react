Project of my own grid, similar to Bootstrap grid.

- made in React.js for React.js
- 24 column grid
- mobile-first
- SCSS mixins and variables
- 8 breakpoints

Breakpoints: 
- xs (0px default)
- sm (576px)
- sml (576px and orientation landscape)
- md (768px)
- mdl (768px and orientation landscape)
- lg (992px)
- lgl (992px and orientation landscape),
- xl (1200px)

Components:
- Container 
Container.propTypes = {
  fluid: PropTypes.bool,
  classes: PropTypes.string
};

- Row 
Row.propTypes = {
  gutters: guttersSize,
  smGutters: guttersSize,
  mdGutters: guttersSize,
  lgGutters: guttersSize,
  xlGutters: guttersSize,
  classes: PropTypes.string
};
// guttersSize = PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl']);
// 'none' === 0px, 'xs' === 5px, 'sm' === 10px, 'md' === 15px, 'lg' === 20px, 'xl' === 25px

- Col 
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
  (...)
  xlOffset: PropTypes.number,
  xsHidden: PropTypes.bool,
  (...)
  xlHidden: PropTypes.bool,
  xsShown: PropTypes.bool,
  (...)
  xlShown: PropTypes.bool,
  classes: PropTypes.string
};

// columnProps = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf(['auto', 'contentWidth']),
]);

Usage:
- import components from my-grid.js file
