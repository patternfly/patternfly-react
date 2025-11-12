import { Flex, FlexItem } from '../../layouts/Flex';
import { CompassPanel } from './CompassPanel';
import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

export interface CompassMainHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  /** Additional classes added to the main header */
  className?: string;
  /** Styled title. If title or toolbar is provided, the children will be ignored. */
  title?: React.ReactNode;
  /** Styled toolbar. If title or toolbar is provided, the children will be ignored. */
  toolbar?: React.ReactNode;
  /** Custom main header content. To opt into a default styling, use the title and toolbar props instead. */
  children?: React.ReactNode;
}

export const CompassMainHeader: React.FunctionComponent<CompassMainHeaderProps> = ({
  className,
  title,
  toolbar,
  children,
  ...props
}) => {
  const _content =
    title !== undefined || toolbar !== undefined ? (
      <CompassPanel>
        <Flex alignItems={{ default: 'alignItemsCenter' }}>
          <FlexItem grow={{ default: 'grow' }}>{title}</FlexItem>
          {toolbar && <FlexItem>{toolbar}</FlexItem>}
        </Flex>
      </CompassPanel>
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
