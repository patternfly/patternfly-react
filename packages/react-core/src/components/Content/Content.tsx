import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { useOUIAProps, OUIAProps } from '../../helpers';

export enum ContentVariants {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  a = 'a',
  small = 'small',
  blockquote = 'blockquote',
  pre = 'pre',
  hr = 'hr',
  ul = 'ul',
  ol = 'ol',
  dl = 'dl',
  li = 'li',
  dt = 'dt',
  dd = 'dd'
}

export interface ContentProps extends React.HTMLProps<HTMLElement>, OUIAProps {
  /** The content component. If none provided, it will be a 'div' and styling will be applied to all its child components. */
  component?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'a'
    | 'small'
    | 'blockquote'
    | 'pre'
    | 'hr'
    | 'ul'
    | 'ol'
    | 'dl'
    | 'li'
    | 'dt'
    | 'dd';
  /** Children rendered within the Content. */
  children?: React.ReactNode;
  /** Additional classes added to the Content. */
  className?: string;
  /** Modifies the list (ul, ol and dl components) to have plain styling. */
  isPlainList?: boolean;
  /** Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited. */
  isVisitedLink?: boolean;
  /** Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size.  */
  isEditorial?: boolean;
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

const componentStyles = {
  div: styles.content,
  h1: styles.contentH1,
  h2: styles.contentH2,
  h3: styles.contentH3,
  h4: styles.contentH4,
  h5: styles.contentH5,
  h6: styles.contentH6,
  p: styles.contentP,
  a: styles.contentA,
  small: styles.contentSmall,
  blockquote: styles.contentBlockquote,
  pre: styles.contentPre,
  hr: styles.contentHr,
  ul: styles.contentUl,
  ol: styles.contentOl,
  dl: styles.contentDl,
  li: styles.contentLi,
  dt: styles.contentDt,
  dd: styles.contentDd
};

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
  className = '',
  component,
  isPlainList = false,
  isVisitedLink = false,
  ouiaId,
  ouiaSafe = true,
  isEditorial = false,
  ...props
}: ContentProps) => {
  const wrappingComponent = component ?? 'div';
  const Component: any = wrappingComponent;
  const ouiaProps = useOUIAProps(Content.displayName, ouiaId, ouiaSafe);

  const isList = ['ul', 'ol', 'dl'].includes(wrappingComponent);

  return (
    <Component
      {...ouiaProps}
      {...props}
      data-pf-content
      className={css(
        componentStyles[wrappingComponent],
        isList && isPlainList && styles.modifiers.plain,
        isVisitedLink && styles.modifiers.visited,
        isEditorial && styles.modifiers.editorial,
        className
      )}
    >
      {children}
    </Component>
  );
};
Content.displayName = 'Content';
