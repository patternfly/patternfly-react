import * as React from 'react';
import * as styles from '@patternfly/patternfly-next/components/Avatar/avatar.css';
import { css } from '@patternfly/react-styles';
import * as PropTypes from 'prop-types';

let _styles: any = styles;

const propTypes = {
  /** Additional classes added to the Avatar. */
  className: PropTypes.string,
  /** Attribute that specifies the URL of the image for the Avatar. */
  src: PropTypes.string,
  /** Attribute that specifies the alt text of the image for the Avatar. */
  alt: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  src: ''
};

/**
 * Column properties.
 */
export interface IAvatarProps {
  /** Additional classes added to the Avatar. */
  className?: string;
  /** Attribute that specifies the URL of the image for the Avatar. */
  src?: number;
  /** Attribute that specifies the alt text of the image for the Avatar. */
  alt: string
}

class Avatar extends React.Component<IAvatarProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (<img {...this.props.props} className={css(_styles.avatar, this.props.className)} src={this.props.src} alt={this.props.alt} />);
  }

}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
