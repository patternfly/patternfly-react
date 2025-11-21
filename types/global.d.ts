declare module '@patternfly/react-styles/css/components/*' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '@patternfly/react-styles/css/layouts/*' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '@patternfly/react-styles/css/*' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '@patternfly/react-styles' {
  export function css(
    ...classes: (string | boolean | undefined | null | { [key: string]: boolean | undefined | null })[]
  ): string;
  export function isModifier(className?: string): boolean;
}

declare module '@patternfly/react-icons/dist/esm/icons/*-icon' {
  import type { FunctionComponent, SVGProps } from 'react';
  const Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string;
      size?: 'sm' | 'md' | 'lg' | 'xl';
    }
  >;
  export default Icon;
}

declare module '@patternfly/react-tokens/dist/esm/*' {
  const tokenValue: string;
  export default tokenValue;
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
