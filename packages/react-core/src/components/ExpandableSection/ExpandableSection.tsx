import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { PickOptional } from '../../helpers/typeUtils';

export interface ExpandableSectionProps {
  /** Content rendered inside the Expandable Component */
  children: React.ReactNode;
  /** Additional classes added to the Expandable Component */
  className?: string;
  /** Flag to indicate if the content is expanded */
  isExpanded?: boolean;
  /** Text that appears in the toggle */
  toggleText?: string;
  /** Text that appears in the toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextExpanded?: string;
  /** Text that appears in the toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextCollapsed?: string;
  /** Callback function to toggle the expandable content */
  onToggle?: () => void;
  /** Forces active state */
  isActive?: boolean;
}

interface ExpandableSectionState {
  isExpanded: boolean;
}

export class ExpandableSection extends React.Component<ExpandableSectionProps, ExpandableSectionState> {
  constructor(props: ExpandableSectionProps) {
    super(props);

    this.state = {
      isExpanded: props.isExpanded
    };
  }

  static defaultProps: PickOptional<ExpandableSectionProps> = {
    className: '',
    toggleText: '',
    toggleTextExpanded: '',
    toggleTextCollapsed: '',
    onToggle: (): any => undefined,
    isActive: false
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

  render() {
    const {
      onToggle: onToggleProp,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isActive,
      className,
      toggleText,
      toggleTextExpanded,
      toggleTextCollapsed,
      children,
      isExpanded,
      ...props
    } = this.props;
    let onToggle = onToggleProp;
    let propOrStateIsExpanded = isExpanded;

    // uncontrolled
    if (isExpanded === undefined) {
      propOrStateIsExpanded = this.state.isExpanded;
      onToggle = () => {
        onToggleProp();
        this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
      };
    }

    const computedToggleText = this.calculateToggleText(
      toggleText,
      toggleTextExpanded,
      toggleTextCollapsed,
      propOrStateIsExpanded
    );

    return (
      <div
        {...props}
        className={css(
          styles.expandableSection,
          propOrStateIsExpanded && styles.modifiers.expanded,
          isActive && styles.modifiers.active,
          className
        )}
      >
        <button
          className={css(styles.expandableSectionToggle)}
          type="button"
          aria-expanded={propOrStateIsExpanded}
          onClick={onToggle}
        >
          <span className={css(styles.expandableSectionToggleIcon)}>
            <AngleRightIcon aria-hidden />
          </span>
          <span className={css(styles.expandableSectionToggleText)}>{computedToggleText}</span>
        </button>
        <div className={css(styles.expandableSectionContent)} hidden={!propOrStateIsExpanded}>
          {children}
        </div>
      </div>
    );
  }
}
