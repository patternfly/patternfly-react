import compassHeroBackgroundImageLight from '@patternfly/react-tokens/dist/esm/c_compass__hero_BackgroundImage_light';
import compassHeroBackgroundImageDark from '@patternfly/react-tokens/dist/esm/c_compass__hero_BackgroundImage_dark';
import compassHeroGradientStop1Light from '@patternfly/react-tokens/dist/esm/c_compass__hero_gradient_stop_1_light';
import compassHeroGradientStop2Light from '@patternfly/react-tokens/dist/esm/c_compass__hero_gradient_stop_2_light';
import compassHeroGradientStop3Light from '@patternfly/react-tokens/dist/esm/c_compass__hero_gradient_stop_3_light';
import compassHeroGradientStop1Dark from '@patternfly/react-tokens/dist/esm/c_compass__hero_gradient_stop_1_dark';
import compassHeroGradientStop2Dark from '@patternfly/react-tokens/dist/esm/c_compass__hero_gradient_stop_2_dark';
import compassHeroGradientStop3Dark from '@patternfly/react-tokens/dist/esm/c_compass__hero_gradient_stop_3_dark';
import { css } from '@patternfly/react-styles';

interface CompassHeroProps extends Omit<React.HTMLProps<HTMLDivElement>, 'content'> {
  /** Additional classes added to the hero. */
  className?: string;
  /** Content of the hero. */
  children?: React.ReactNode;
  /** Light theme background image path for the hero */
  backgroundSrcLight?: string;
  /** Dark theme background image path for the hero */
  backgroundSrcDark?: string;
  /** Light theme gradient for the hero */
  gradientLight?: {
    stop1?: string;
    stop2?: string;
    stop3?: string;
  };
  /** Dark theme gradient for the hero */
  gradientDark?: {
    stop1?: string;
    stop2?: string;
    stop3?: string;
  };
}

export const CompassHero: React.FunctionComponent<CompassHeroProps> = ({
  className,
  children,
  backgroundSrcLight,
  backgroundSrcDark,
  gradientLight,
  gradientDark,
  ...props
}) => {
  const backgroundImageStyles: { [key: string]: string } = {};
  if (backgroundSrcLight) {
    backgroundImageStyles[compassHeroBackgroundImageLight.name] = `url(${backgroundSrcLight})`;
  }
  if (backgroundSrcDark) {
    backgroundImageStyles[compassHeroBackgroundImageDark.name] = `url(${backgroundSrcDark})`;
  }

  if (gradientLight) {
    if (gradientLight.stop1) {
      backgroundImageStyles[compassHeroGradientStop1Light.name] = gradientLight.stop1;
    }
    if (gradientLight.stop2) {
      backgroundImageStyles[compassHeroGradientStop2Light.name] = gradientLight.stop2;
    }
    if (gradientLight.stop3) {
      backgroundImageStyles[compassHeroGradientStop3Light.name] = gradientLight.stop3;
    }
  }
  if (gradientDark) {
    if (gradientDark.stop1) {
      backgroundImageStyles[compassHeroGradientStop1Dark.name] = gradientDark.stop1;
    }
    if (gradientDark.stop2) {
      backgroundImageStyles[compassHeroGradientStop2Dark.name] = gradientDark.stop2;
    }
    if (gradientDark.stop3) {
      backgroundImageStyles[compassHeroGradientStop3Dark.name] = gradientDark.stop3;
    }
  }

  return (
    <div
      className={css('pf-v6-c-compass__panel pf-v6-c-compass__hero', className)}
      style={{ ...props.style, ...backgroundImageStyles }}
      {...props}
    >
      <div className={css('pf-v6-c-compass__hero-body')}>{children}</div>
    </div>
  );
};

CompassHero.displayName = 'CompassHero';
