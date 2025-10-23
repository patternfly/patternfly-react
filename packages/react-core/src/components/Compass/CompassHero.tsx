import { Flex, FlexItem } from '../../layouts/Flex';
import { css } from '@patternfly/react-styles';

interface CompassHeroProps extends Omit<React.HTMLProps<HTMLDivElement>, 'content'> {
  /** Additional classes added to the hero. */
  className?: string;
  /** Styled hero content. If provided, the children prop will be ignored. */
  content?: React.ReactNode;
  /** Custom hero content. To opt into a default set of styling, use the content prop instead. */
  children?: React.ReactNode;
}

export const CompassHero: React.FunctionComponent<CompassHeroProps> = ({ className, children, content, ...props }) => {
  if (content !== undefined) {
    return (
      <div className={css('pf-v6-c-compass__hero', className)} {...props}>
        <div className={css('pf-v6-c-compass__hero-body')}>
          <Flex>
            <FlexItem grow={{ default: 'grow' }}>{content}</FlexItem>
          </Flex>
        </div>
      </div>
    );
  }

  return (
    <div className={css('pf-v6-c-compass__hero', className)} {...props}>
      <div className={css('pf-v6-c-compass__hero-body')}>{children}</div>
    </div>
  );
};

CompassHero.displayName = 'CompassHero';
