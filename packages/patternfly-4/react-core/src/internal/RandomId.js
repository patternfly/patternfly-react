/** This Component can be used to wrap a functional component in order to generate a random ID
 * Example of how to use this component
 *
 * const Component = ({ id}) => (
 *  <RandomId>
 *  {randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </RandomId>
 *  );
 *
 * Component.propTypes = {
 *  id: PropTypes.string
 * }
 */

import React from 'react';
import PropTypes from 'prop-types';

let currentId = 0;

const propTypes = {
  /** String to prefix the random ID with */
  prefix: PropTypes.string,
  /** component to be rendered with the generated id */
  children: PropTypes.func.isRequired
};

class RandomId extends React.Component {
  static defaultProps = {
    prefix: 'pf-random-id-'
  };
  static propTypes = propTypes;
  id = `${this.props.prefix}${currentId++}`;

  render() {
    return this.props.children(this.id);
  }
}

export default RandomId;
