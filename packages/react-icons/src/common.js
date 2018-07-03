import PropTypes from 'prop-types';

export const IconSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};

export const propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(IconSize)),
  title: PropTypes.string
};

export const defaultProps = {
  color: 'currentColor',
  size: IconSize.sm,
  title: null
};

export const getSize = size => {
  switch (size) {
    case IconSize.sm:
      return '1rem';
    case IconSize.md:
      return '1.5rem';
    case IconSize.lg:
      return '2rem';
    case IconSize.xl:
      return '3rem';
    default:
      return '1rem';
  }
};
