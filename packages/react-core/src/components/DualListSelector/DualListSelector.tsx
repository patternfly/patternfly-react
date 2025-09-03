import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { GenerateId } from '../../helpers';
import { DualListSelectorContext } from './DualListSelectorContext';
import { useHasAnimations } from '../../helpers';

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
  /** Flag indicating whether a tree dual list selector has animations. This will always render
   * nested dual list selector items rather than dynamically rendering them. This prop will be removed in
   * the next breaking change release in favor of defaulting to always-rendered items.
   */
  hasAnimations?: boolean;
}

export const DualListSelector: React.FunctionComponent<DualListSelectorProps> = ({
  className,
  children,
  id,
  isTree = false,
  hasAnimations: localHasAnimations,
  ...props
}: DualListSelectorProps) => {
  const hasAnimations = useHasAnimations(localHasAnimations);

  return (
    <DualListSelectorContext.Provider value={{ isTree, hasAnimations }}>
      <GenerateId>
        {(randomId) => (
          <div
            className={css(
              styles.dualListSelector,
              hasAnimations && isTree && styles.modifiers.animateExpand,
              className
            )}
            id={id || randomId}
            {...props}
          >
            {children}
          </div>
        )}
      </GenerateId>
    </DualListSelectorContext.Provider>
  );
};
DualListSelector.displayName = 'DualListSelector';
