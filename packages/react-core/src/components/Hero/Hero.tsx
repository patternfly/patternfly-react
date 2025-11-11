import styles from '@patternfly/react-styles/css/components/Hero/hero';
import { css } from '@patternfly/react-styles';
import heroBackgroundImageLight from '@patternfly/react-tokens/dist/esm/c_hero_BackgroundImage_light';
import heroBackgroundImageDark from '@patternfly/react-tokens/dist/esm/c_hero_BackgroundImage_dark';
import heroGradientStop1Light from '@patternfly/react-tokens/dist/esm/c_hero_gradient_stop_1_light';
import heroGradientStop2Light from '@patternfly/react-tokens/dist/esm/c_hero_gradient_stop_2_light';
import heroGradientStop3Light from '@patternfly/react-tokens/dist/esm/c_hero_gradient_stop_3_light';
import heroGradientStop1Dark from '@patternfly/react-tokens/dist/esm/c_hero_gradient_stop_1_dark';
import heroGradientStop2Dark from '@patternfly/react-tokens/dist/esm/c_hero_gradient_stop_2_dark';
import heroGradientStop3Dark from '@patternfly/react-tokens/dist/esm/c_hero_gradient_stop_3_dark';
import heroBodyWidth from '@patternfly/react-tokens/dist/esm/c_hero__body_Width';
import heroBodyMaxWidth from '@patternfly/react-tokens/dist/esm/c_hero__body_MaxWidth';

/** The main Hero component that allows adjusting of its background images and gradients in different color modes (such as light and dark). */

export interface HeroProps extends Omit<React.HTMLProps<HTMLDivElement>, 'content'> {
  /** Content of the hero */
  children?: React.ReactNode;
  /** Additional classes added to the hero */
  className?: string;
  /** Light theme background image path of the hero */
  backgroundSrcLight?: string;
  /** Dark theme background image path of the hero */
  backgroundSrcDark?: string;
  /** Light theme gradient of the hero, taking any valid CSS color values for each stop property. */
  gradientLight?: {
    stop1?: string;
    stop2?: string;
    stop3?: string;
  };
  /** Dark theme gradient of the hero, taking any valid CSS color values for each stop property. */
  gradientDark?: {
    stop1?: string;
    stop2?: string;
    stop3?: string;
  };
  /** Flag indicating whether glass styles are removed from the hero when a glass theme is applied. */
  hasNoGlass?: boolean;
  /** Modifies the width of the hero body. */
  bodyWidth?: string;
  /** Modifies the max-width of the hero body. */
  bodyMaxWidth?: string;
}

export const Hero: React.FunctionComponent<HeroProps> = ({
  className,
  children,
  backgroundSrcLight,
  backgroundSrcDark,
  gradientLight,
  gradientDark,
  hasNoGlass = false,
  bodyWidth,
  bodyMaxWidth,
  ...props
}) => {
  const customStyles: { [key: string]: string } = {};
  if (backgroundSrcLight) {
    customStyles[heroBackgroundImageLight.name] = `url(${backgroundSrcLight})`;
  }
  if (backgroundSrcDark) {
    customStyles[heroBackgroundImageDark.name] = `url(${backgroundSrcDark})`;
  }

  if (gradientLight?.stop1) {
    customStyles[heroGradientStop1Light.name] = gradientLight.stop1;
  }
  if (gradientLight?.stop2) {
    customStyles[heroGradientStop2Light.name] = gradientLight.stop2;
  }
  if (gradientLight?.stop3) {
    customStyles[heroGradientStop3Light.name] = gradientLight.stop3;
  }
  if (gradientDark?.stop1) {
    customStyles[heroGradientStop1Dark.name] = gradientDark.stop1;
  }
  if (gradientDark?.stop2) {
    customStyles[heroGradientStop2Dark.name] = gradientDark.stop2;
  }
  if (gradientDark?.stop3) {
    customStyles[heroGradientStop3Dark.name] = gradientDark.stop3;
  }

  if (bodyWidth) {
    customStyles[heroBodyWidth.name] = bodyWidth;
  }
  if (bodyMaxWidth) {
    customStyles[heroBodyMaxWidth.name] = bodyMaxWidth;
  }

  return (
    <div
      className={css(styles.hero, hasNoGlass && styles.modifiers.noGlass, className)}
      style={{ ...props.style, ...customStyles }}
      {...props}
    >
      <div className={css(styles.heroBody)}>{children}</div>
    </div>
  );
};

Hero.displayName = 'Hero';
