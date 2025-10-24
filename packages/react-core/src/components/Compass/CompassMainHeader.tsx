import { Flex, FlexItem } from '../../layouts/Flex';
import { CompassSection } from './CompassSection';
import { css } from '@patternfly/react-styles';

interface CompassMainHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  /** Additional classes added to the main header. */
  className?: string;
  /** Styled title. If title or toolbar is provided, the children will be ignored. */
  title?: React.ReactNode;
  /** Styled toolbar. If title or toolbar is provided, the children will be ignored. */
  toolbar?: React.ReactNode;
  /** Custom main header content. To opt into a default set of styling, use the title and toolbar props instead. */
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
      <CompassSection>
        <Flex alignItems={{ default: 'alignItemsCenter' }}>
          <FlexItem grow={{ default: 'grow' }}>{title}</FlexItem>
          <FlexItem>{toolbar}</FlexItem>
        </Flex>
      </CompassSection>
    ) : (
      children
    );

  return (
    <div className={css('pf-v6-c-compass__main-header', className)} {...props}>
      {_content}
    </div>
  );
};

CompassMainHeader.displayName = 'CompassMainHeader';
