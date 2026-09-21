import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { useSSRSafeId, useOUIAProps, OUIAProps, useHasAnimations } from '../../helpers';
import { DualListSelectorContext } from './DualListSelectorContext';

/** Acts as a container for all other DualListSelector sub-components when using a
 * composable dual list selector.
 */

export interface DualListSelectorProps extends OUIAProps {
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
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const DualListSelector: React.FunctionComponent<DualListSelectorProps> = ({
  className,
  children,
  id,
  isTree = false,
  hasAnimations: hasAnimationsProp,
  ouiaId,
  ouiaSafe = true,
  ...props
}: DualListSelectorProps) => {
  const hasAnimations = useHasAnimations(hasAnimationsProp);
  const randomId = useSSRSafeId();
  const ouiaProps = useOUIAProps(DualListSelector.displayName, ouiaId, ouiaSafe);

  return (
    <DualListSelectorContext.Provider value={{ isTree, hasAnimations }}>
      <div
        className={css(styles.dualListSelector, hasAnimations && isTree && styles.modifiers.animateExpand, className)}
        id={id || randomId}
        {...props}
        {...ouiaProps}
      >
        {children}
      </div>
    </DualListSelectorContext.Provider>
  );
};
DualListSelector.displayName = 'DualListSelector';
