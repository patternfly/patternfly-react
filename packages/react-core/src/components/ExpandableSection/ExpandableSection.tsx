import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import { css } from '@patternfly/react-styles';
import lineClamp from '@patternfly/react-tokens/dist/esm/c_expandable_section_m_truncate__content_LineClamp';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { PickOptional } from '../../helpers/typeUtils';
import { debounce } from '../../helpers/util';
import { getResizeObserver } from '../../helpers/resizeObserver';

export enum ExpandableSectionVariant {
  default = 'default',
  truncate = 'truncate'
}

/** The main expandable section component. */

export interface ExpandableSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the expandable section. */
  children?: React.ReactNode;
  /** Additional classes added to the expandable section. */
  className?: string;
  /** Id of the content of the expandable section. When passing in the isDetached property, this
   * property's value should match the contenId property of the expandable section toggle sub-component.
   */
  contentId?: string;
  /** Display size variant. Set to "large" for disclosure styling. */
  displaySize?: 'default' | 'large';
  /** Forces active state. */
  isActive?: boolean;
  /** Indicates the expandable section has a detached toggle. */
  isDetached?: boolean;
  /** Flag to indicate if the content is expanded. */
  isExpanded?: boolean;
  /** Flag to indicate if the content is indented. */
  isIndented?: boolean;
  /** Flag to indicate the width of the component is limited. Set to "true" for disclosure styling. */
  isWidthLimited?: boolean;
  /** Callback function to toggle the expandable section. Detached expandable sections should
   * use the onToggle property of the expandable section toggle sub-component.
   */
  onToggle?: (isExpanded: boolean) => void;
  /** React node that appears in the attached toggle in place of the toggleText property. */
  toggleContent?: React.ReactNode;
  /** Text that appears in the attached toggle. */
  toggleText?: string;
  /** Text that appears in the attached toggle when collapsed (will override toggleText if
   * both are specified; used for uncontrolled expandable with dynamic toggle text).
   */
  toggleTextCollapsed?: string;
  /** Text that appears in the attached toggle when expanded (will override toggleText if
   * both are specified; used for uncontrolled expandable with dynamic toggle text).
   */
  toggleTextExpanded?: string;
  /** @beta Truncates the expandable content to the specified number of lines when using the
   * "truncate" variant.
   */
  truncateMaxLines?: number;
  /** @beta Determines the variant of the expandable section. When passing in "truncate" as the
   * variant, the expandable content will be truncated after 3 lines by default.
   */
  variant?: 'default' | 'truncate';
}

interface ExpandableSectionState {
  isExpanded: boolean;
  hasToggle: boolean;
  previousWidth: number;
}

const setLineClamp = (lines: number, element: HTMLDivElement) => {
  if (!element || lines < 1) {
    return;
  }

  element.style.setProperty(lineClamp.name, lines.toString());
};

export class ExpandableSection extends React.Component<ExpandableSectionProps, ExpandableSectionState> {
  static displayName = 'ExpandableSection';
  constructor(props: ExpandableSectionProps) {
    super(props);

    this.state = {
      isExpanded: props.isExpanded,
      hasToggle: true,
      previousWidth: undefined
    };
  }

  expandableContentRef = React.createRef<HTMLDivElement>();
  observer: any = () => {};

  static defaultProps: PickOptional<ExpandableSectionProps> = {
    className: '',
    toggleText: '',
    toggleTextExpanded: '',
    toggleTextCollapsed: '',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle: (isExpanded): void => undefined,
    isActive: false,
    isDetached: false,
    displaySize: 'default',
    isWidthLimited: false,
    isIndented: false,
    contentId: '',
    variant: 'default'
  };

  private calculateToggleText(
    toggleText: string,
    toggleTextExpanded: string,
    toggleTextCollapsed: string,
    propOrStateIsExpanded: boolean
  ) {
    if (propOrStateIsExpanded && toggleTextExpanded !== '') {
      return toggleTextExpanded;
    }
    if (!propOrStateIsExpanded && toggleTextCollapsed !== '') {
      return toggleTextCollapsed;
    }
    return toggleText;
  }

  componentDidMount() {
    if (this.props.variant === ExpandableSectionVariant.truncate) {
      const expandableContent = this.expandableContentRef.current;
      this.setState({ previousWidth: expandableContent.offsetWidth });
      this.observer = getResizeObserver(expandableContent, this.handleResize, false);

      if (this.props.truncateMaxLines) {
        setLineClamp(this.props.truncateMaxLines, expandableContent);
      }

      this.checkToggleVisibility();
    }
  }

  componentDidUpdate(prevProps: ExpandableSectionProps) {
    if (
      this.props.variant === ExpandableSectionVariant.truncate &&
      prevProps.truncateMaxLines !== this.props.truncateMaxLines
    ) {
      const expandableContent = this.expandableContentRef.current;
      setLineClamp(this.props.truncateMaxLines, expandableContent);
      this.checkToggleVisibility();
    }
  }

  componentWillUnmount() {
    if (this.props.variant === ExpandableSectionVariant.truncate) {
      this.observer();
    }
  }

  checkToggleVisibility = () => {
    if (this.expandableContentRef?.current) {
      const maxLines = this.props.truncateMaxLines || parseInt(lineClamp.value);
      const totalLines =
        this.expandableContentRef.current.scrollHeight /
        parseInt(getComputedStyle(this.expandableContentRef.current).lineHeight);

      this.setState({
        hasToggle: totalLines > maxLines
      });
    }
  };

  resize = () => {
    const { offsetWidth } = this.expandableContentRef.current;
    if (this.state.previousWidth !== offsetWidth) {
      this.setState({ previousWidth: offsetWidth });
      this.checkToggleVisibility();
    }
  };
  handleResize = debounce(this.resize, 250);

  render() {
    const {
      onToggle: onToggleProp,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isActive,
      className,
      toggleText,
      toggleTextExpanded,
      toggleTextCollapsed,
      toggleContent,
      children,
      isExpanded,
      isDetached,
      displaySize,
      isWidthLimited,
      isIndented,
      contentId,
      variant,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      truncateMaxLines,
      ...props
    } = this.props;
    let onToggle = onToggleProp;
    let propOrStateIsExpanded = isExpanded;

    // uncontrolled
    if (isExpanded === undefined) {
      propOrStateIsExpanded = this.state.isExpanded;
      onToggle = isOpen => {
        this.setState({ isExpanded: isOpen }, () => onToggleProp(this.state.isExpanded));
      };
    }

    const computedToggleText = this.calculateToggleText(
      toggleText,
      toggleTextExpanded,
      toggleTextCollapsed,
      propOrStateIsExpanded
    );

    const expandableToggle = !isDetached && (
      <button
        className={css(styles.expandableSectionToggle)}
        type="button"
        aria-expanded={propOrStateIsExpanded}
        onClick={() => onToggle(!propOrStateIsExpanded)}
      >
        {variant !== ExpandableSectionVariant.truncate && (
          <span className={css(styles.expandableSectionToggleIcon)}>
            <AngleRightIcon aria-hidden />
          </span>
        )}
        <span className={css(styles.expandableSectionToggleText)}>{toggleContent || computedToggleText}</span>
      </button>
    );

    return (
      <div
        className={css(
          styles.expandableSection,
          propOrStateIsExpanded && styles.modifiers.expanded,
          isActive && styles.modifiers.active,
          isDetached && styles.modifiers.detached,
          displaySize === 'large' && styles.modifiers.displayLg,
          isWidthLimited && styles.modifiers.limitWidth,
          isIndented && styles.modifiers.indented,
          variant === ExpandableSectionVariant.truncate && styles.modifiers.truncate,
          className
        )}
        {...props}
      >
        {variant === ExpandableSectionVariant.default && expandableToggle}
        <div
          ref={this.expandableContentRef}
          className={css(styles.expandableSectionContent)}
          hidden={variant !== ExpandableSectionVariant.truncate && !propOrStateIsExpanded}
          id={contentId}
        >
          {children}
        </div>
        {variant === ExpandableSectionVariant.truncate && this.state.hasToggle && expandableToggle}
      </div>
    );
  }
}
