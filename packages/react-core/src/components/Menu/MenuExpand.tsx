import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface MenuExpandProps extends React.HTMLProps<HTMLDivElement> {
  /** Expandable content */
  children?: React.ReactNode;
  /** Additional classes added to the MenuExpand */
  className?: string;
  /** Flag to expand */
  isExpanded?: boolean;
  /** Header */
  header: React.ReactNode;
}

export const MenuExpand: React.FunctionComponent<MenuExpandProps> = ({
  children,
  className = '',
  isExpanded,
  header,
  ...props
}: MenuExpandProps) => {
  const [_isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    if (isExpanded !== undefined && isExpanded !== null) {
      setIsExpanded(isExpanded);
    }
  }, [isExpanded]);

  return (
    <>
      {React.cloneElement(header as React.ReactElement, {
        onClick: (e: any) => {
          (header as React.ReactElement).props.onClick && (header as React.ReactElement).props.onClick(e);
          if (children) {
            setIsExpanded(!_isExpanded);
          }
        }
      })}
      <div {...props} className={css('expandable-css', className)}>
        {_isExpanded && children}
      </div>
    </>
  );
};

MenuExpand.displayName = 'MenuExpand';
