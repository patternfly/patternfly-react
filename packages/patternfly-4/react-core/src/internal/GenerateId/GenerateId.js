/** This Component can be used to wrap a functional component in order to generate a random ID
 * Example of how to use this component
 *
 * const Component = ({id}) => (
 *  <GenerateId>{randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </GenerateId>
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
  /** String to prefix the random id with */
  prefix: PropTypes.string,
  /** Component to be rendered with the generated id */
  children: PropTypes.func.isRequired
};

class GenerateId extends React.Component {
  static defaultProps = {
    prefix: 'pf-random-id-'
  };
  static propTypes = propTypes;
  id = `${this.props.prefix}${currentId++}`;

  render() {
    return this.props.children(this.id);
  }
}

export default GenerateId;
