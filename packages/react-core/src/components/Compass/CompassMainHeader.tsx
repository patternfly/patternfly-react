import { CompassMainHeaderContent } from './CompassMainHeaderContent';
import { CompassMainHeaderTitle } from './CompassMainHeaderTitle';
import { CompassMainHeaderToolbar } from './CompassMainHeaderToolbar';
import { Panel, PanelMain, PanelMainBody, PanelProps } from '../Panel';
import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

/** The wrapper component for header content in the main Compass area. When building out a custom implementation,
 * you should ensure any content within the main header is rendered inside a Panel, PanelMain, PanelMainBody stack and main header content wrappers.
 */

export interface CompassMainHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  /** Custom main header content. To opt into a default styling, use the title and toolbar props instead. */
  children?: React.ReactNode;
  /** Additional classes added to the main header */
  className?: string;
  /** Styled title. If title or toolbar is provided, the children will be ignored. */
  title?: React.ReactNode;
  /** Styled toolbar. If title or toolbar is provided, the children will be ignored. */
  toolbar?: React.ReactNode;
  /** Additional props passed to the Panel that wraps the main header content when using the title or toolbar props. When using the
   * children prop, you should pass your own Panel.
   */
  panelProps?: Omit<PanelProps, 'children'>;
}

export const CompassMainHeader: React.FunctionComponent<CompassMainHeaderProps> = ({
  className,
  title,
  toolbar,
  children,
  panelProps,
  ...props
}: CompassMainHeaderProps) => {
  const _content =
    title !== undefined || toolbar !== undefined ? (
      <Panel {...panelProps}>
        <PanelMain>
          <PanelMainBody>
            <CompassMainHeaderContent>
              {title && <CompassMainHeaderTitle>{title}</CompassMainHeaderTitle>}
              {toolbar && <CompassMainHeaderToolbar>{toolbar}</CompassMainHeaderToolbar>}
            </CompassMainHeaderContent>
          </PanelMainBody>
        </PanelMain>
      </Panel>
    ) : (
      children
    );

  return (
    <div className={css(`${styles.compass}__main-header`, className)} {...props}>
      {_content}
    </div>
  );
};

CompassMainHeader.displayName = 'CompassMainHeader';
