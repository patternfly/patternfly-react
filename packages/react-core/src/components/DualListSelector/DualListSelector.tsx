import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { GenerateId, PickOptional } from '../../helpers';
import { DualListSelectorContext } from './DualListSelectorContext';

/** Acts as a container for all other DualListSelector sub-components when using a
 * composable dual list selector.
 */

export interface DualListSelectorProps {
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** ID of the dual list selector. */
  id?: string;
  /** Flag indicating if the dual list selector uses trees instead of simple lists. */
  isTree?: boolean;
  /** Content to be rendered in the dual list selector. */
  children?: React.ReactNode;
}

class DualListSelector extends React.Component<DualListSelectorProps> {
  static displayName = 'DualListSelector';
  static defaultProps: PickOptional<DualListSelectorProps> = {
    children: '',
    isTree: false
  };

  constructor(props: DualListSelectorProps) {
    super(props);
  }

  render() {
    const { className, children, id, isTree, ...props } = this.props;

    return (
      <DualListSelectorContext.Provider value={{ isTree }}>
        <GenerateId>
          {(randomId) => (
            <div className={css(styles.dualListSelector, className)} id={id || randomId} {...props}>
              {children}
            </div>
          )}
        </GenerateId>
      </DualListSelectorContext.Provider>
    );
  }
}

export { DualListSelector };
