import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/LabelGroup/label-group';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { Label } from '../Label';
import { Tooltip } from '../Tooltip';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import { fillTemplate } from '../../helpers';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';

export interface LabelGroupProps extends React.HTMLProps<HTMLUListElement> {
  /** Content rendered inside the label group. Should be <Label> elements. */
  children?: React.ReactNode;
  /** Additional classes added to the label item */
  className?: string;
  /** Flag for having the label group default to expanded */
  defaultIsOpen?: boolean;
  /** Customizable "Show Less" text string */
  expandedText?: string;
  /** Customizeable template string. Use variable "${remaining}" for the overflow label count. */
  collapsedText?: string;
  /** Category name text for the label group category.  If this prop is supplied the label group with have a label and category styling applied */
  categoryName?: string;
  /** Aria label for label group that does not have a category name */
  'aria-label'?: string;
  /** Set number of labels to show before overflow */
  numLabels?: number;
  /** Flag if label group can be closed */
  isClosable?: boolean;
  /** Aria label for close button */
  closeBtnAriaLabel?: string;
  /** Function that is called when clicking on the label group close button */
  onClick?: (event: React.MouseEvent) => void;
  /** Position of the tooltip which is displayed if the category name text is longer */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Flag to implement a vertical layout */
  isVertical?: boolean;
}

interface LabelGroupState {
  isOpen: boolean;
  isTooltipVisible: boolean;
}

export class LabelGroup extends React.Component<LabelGroupProps, LabelGroupState> {
  static displayName = 'LabelGroup';
  constructor(props: LabelGroupProps) {
    super(props);
    this.state = {
      isOpen: this.props.defaultIsOpen,
      isTooltipVisible: false
    };
  }
  private headingRef = React.createRef<HTMLSpanElement>();

  static defaultProps: LabelGroupProps = {
    expandedText: 'Show Less',
    collapsedText: '${remaining} more',
    categoryName: '',
    defaultIsOpen: false,
    numLabels: 3,
    isClosable: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClick: (_e: React.MouseEvent) => undefined as any,
    closeBtnAriaLabel: 'Close label group',
    tooltipPosition: 'top',
    'aria-label': 'Label group category',
    isVertical: false
  };

  componentDidMount() {
    this.setState({
      isTooltipVisible: Boolean(
        this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth
      )
    });
  }

  toggleCollapse = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isTooltipVisible: Boolean(
        this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth
      )
    }));
  };

  renderLabel(id: string) {
    const { categoryName, tooltipPosition } = this.props;
    const { isTooltipVisible } = this.state;
    return isTooltipVisible ? (
      <Tooltip position={tooltipPosition} content={categoryName}>
        <span
          tabIndex={0}
          ref={this.headingRef}
          className={css(styles.labelGroupLabel)}
          id={id}
          aria-label={categoryName}
        >
          <span aria-hidden="true">{categoryName}</span>
        </span>
      </Tooltip>
    ) : (
      <span ref={this.headingRef} className={css(styles.labelGroupLabel)} aria-hidden="true" id={id}>
        {categoryName}
      </span>
    );
  }

  render() {
    const {
      categoryName,
      children,
      className,
      isClosable,
      closeBtnAriaLabel,
      'aria-label': ariaLabel,
      onClick,
      numLabels,
      expandedText,
      collapsedText,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      defaultIsOpen,
      tooltipPosition,
      isVertical,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...rest
    } = this.props;
    const { isOpen } = this.state;
    const numChildren = React.Children.count(children);
    const collapsedTextResult = fillTemplate(collapsedText as string, {
      remaining: React.Children.count(children) - numLabels
    });

    const renderLabelGroup = (id: string) => {
      const labelArray = !isOpen
        ? React.Children.toArray(children).slice(0, numLabels)
        : React.Children.toArray(children);

      const content = (
        <React.Fragment>
          {categoryName && this.renderLabel(id)}
          <ul
            className={css(styles.labelGroupList)}
            {...(categoryName && { 'aria-labelledby': id })}
            {...(!categoryName && { 'aria-label': ariaLabel })}
            role="list"
            {...rest}
          >
            {labelArray.map((child, i) => (
              <li className={css(styles.labelGroupListItem)} key={i}>
                {child}
              </li>
            ))}
            {numChildren > numLabels && (
              <li className={css(styles.labelGroupListItem)}>
                <Label isOverflowLabel onClick={this.toggleCollapse}>
                  {isOpen ? expandedText : collapsedTextResult}
                </Label>
              </li>
            )}
          </ul>
        </React.Fragment>
      );

      const close = (
        <div className={css(styles.labelGroupClose)}>
          <Button
            variant="plain"
            aria-label={closeBtnAriaLabel}
            onClick={onClick}
            id={`remove_group_${id}`}
            aria-labelledby={`remove_group_${id} ${id}`}
          >
            <TimesCircleIcon aria-hidden="true" />
          </Button>
        </div>
      );

      return (
        <div
          className={css(
            styles.labelGroup,
            className,
            categoryName && styles.modifiers.category,
            isVertical && styles.modifiers.vertical
          )}
        >
          {<div className={css(styles.labelGroupMain)}>{content}</div>}
          {isClosable && close}
        </div>
      );
    };

    return numChildren === 0 ? null : (
      <GenerateId>{randomId => renderLabelGroup(this.props.id || randomId)}</GenerateId>
    );
  }
}
