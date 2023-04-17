import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';
import { WizardDrawerWrapper } from './WizardDrawerWrapper';
import { Drawer, DrawerContent } from '../../../components/Drawer';
import { WizardStep } from './Wizard';
import { debounce } from '../../../helpers/util';
import { getResizeObserver } from '../../../helpers/resizeObserver';

export interface WizardBodyProps {
  /** Anything that can be rendered in the Wizard body */
  children: any;
  /** Set to true to remove the default body padding */
  hasNoBodyPadding: boolean;
  /** Adds an accessible name to the wizard body when the body content overflows and renders
   * a scrollbar.
   */
  'aria-label'?: string;
  /** Adds an accessible name to the wizard body by passing the the id of one or more elements.
   * The aria-labelledby will only be applied when the body content overflows and renders a scrollbar.
   */
  'aria-labelledby': string;
  /** Component used as the primary content container */
  mainComponent?: React.ElementType;
  /** The currently active WizardStep */
  activeStep: WizardStep;
  hasDrawer?: boolean;
  /** Flag indicating the wizard drawer is expanded */
  isDrawerExpanded?: boolean;
  /** Callback function for when the drawer is toggled */
  onExpandDrawer?: () => void;
}

export const WizardBody: React.FunctionComponent<WizardBodyProps> = ({
  children,
  hasNoBodyPadding = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  mainComponent = 'div',
  hasDrawer,
  isDrawerExpanded,
  onExpandDrawer,
  activeStep
}: WizardBodyProps) => {
  const MainComponent = mainComponent;
  const [hasScrollbar, setHasScrollbar] = React.useState(false);
  const [previousWidth, setPreviousWidth] = React.useState<number | undefined>(undefined);
  const wizardBodyRef = React.useRef(null);

  React.useEffect(() => {
    const resize = () => {
      if (wizardBodyRef?.current) {
        const { offsetWidth, offsetHeight, scrollHeight } = wizardBodyRef.current;

        if (previousWidth !== offsetWidth) {
          setPreviousWidth(offsetWidth);
          setHasScrollbar(offsetHeight < scrollHeight);
        }
      }
    };

    const handleResizeWithDelay = debounce(resize, 250);
    let observer = () => {};

    if (wizardBodyRef?.current) {
      observer = getResizeObserver(wizardBodyRef.current, handleResizeWithDelay);
      const { offsetHeight, scrollHeight } = wizardBodyRef.current;

      setHasScrollbar(offsetHeight < scrollHeight);
      setPreviousWidth((wizardBodyRef.current as HTMLElement).offsetWidth);
    }

    return () => {
      observer();
    };
  }, []);

  return (
    <MainComponent
      {...(mainComponent === 'div' && hasScrollbar && { role: 'region' })}
      {...(hasScrollbar && { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 })}
      ref={wizardBodyRef}
      className={css(styles.wizardMain)}
    >
      <WizardDrawerWrapper
        hasDrawer={hasDrawer && activeStep.drawerPanelContent}
        wrapper={(children: React.ReactNode) => (
          <Drawer isInline isExpanded={isDrawerExpanded} onExpand={onExpandDrawer}>
            <DrawerContent panelContent={activeStep.drawerPanelContent}>{children}</DrawerContent>
          </Drawer>
        )}
      >
        <div className={css(styles.wizardMainBody, hasNoBodyPadding && styles.modifiers.noPadding)}>{children}</div>
      </WizardDrawerWrapper>
    </MainComponent>
  );
};
WizardBody.displayName = 'WizardBody';
