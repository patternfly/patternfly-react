import { Flex, FlexItem } from '../../layouts/Flex';
import { css } from '@patternfly/react-styles';

interface CompassHeroProps extends Omit<React.HTMLProps<HTMLDivElement>, 'content'> {
  /** Additional classes added to the hero. */
  className?: string;
  /** Styled hero content. If provided, the children prop will be ignored. */
  content?: React.ReactNode;
  /** Custom hero content. To opt into a default set of styling, use the content prop instead. */
  children?: React.ReactNode;
  /** Light background image path for the hero */
  lightBackgroundSrc?: string;
  /** Dark background image path for the hero */
  darkBackgroundSrc?: string;
}

export const CompassHero: React.FunctionComponent<CompassHeroProps> = ({
  className,
  children,
  content,
  lightBackgroundSrc,
  darkBackgroundSrc,
  ...props
}) => {
  const _content =
    content !== undefined ? (
      <Flex>
        <FlexItem grow={{ default: 'grow' }}>{content}</FlexItem>
      </Flex>
    ) : (
      children
    );

  return (
    <div
      className={css('pf-v6-c-compass__hero', className)}
      style={
        {
          '[cssLightName.name]': `url(${lightBackgroundSrc})`,
          '[cssDarkName.name]': `url(${darkBackgroundSrc})`
        } as React.CSSProperties
      }
      {...props}
    >
      <div className={css('pf-v6-c-compass__hero-body')}>{_content}</div>
    </div>
  );
};

CompassHero.displayName = 'CompassHero';
