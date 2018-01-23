import React from 'react';
import PropTypes from 'prop-types';

import ListViewExpand from './ListViewExpand';
import ListViewGroupItem from './ListViewGroupItem';
import ListViewGroupItemContainer from './ListViewGroupItemContainer';
import ListViewGroupItemHeader from './ListViewGroupItemHeader';
import ListViewRow from './ListViewRow';

/**
 * ListViewItem - main ListViewItem component which handles the expansion logic.
 * ListViewItem is considered expandable if it has child props. In that case it
 * renders ListViewGroupItemHeader and ListViewGroupItemContainer
 */
class ListViewItem extends React.Component {
  constructor() {
    super();
    this.state = { expanded: false };
  }

  toggleExpanded(index) {
    const { onExpand, onExpandClose } = this.props;
    if (this.state.expanded) {
      onExpandClose && onExpandClose();
    } else {
      onExpand && onExpand();
    }
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  render() {
    const {
      children,
      stacked,
      actions,
      additionalInfo,
      description,
      heading,
      leftContent,
      checkboxInput,
      hideCloseIcon,
      compoundExpand,
      compoundExpanded,
      onCloseCompoundExpand,
      ...other
    } = this.props;
    const { expanded } = this.state;

    if (children) {
      if (compoundExpand) {
        return (
          <ListViewGroupItem
            expanded={compoundExpanded}
            stacked={stacked}
            {...other}
          >
            <ListViewRow
              checkboxInput={checkboxInput}
              leftContent={leftContent}
              heading={heading}
              description={description}
              additionalInfo={additionalInfo}
              actions={actions}
            />
            <ListViewGroupItemContainer
              expanded={compoundExpanded}
              onClose={hideCloseIcon ? undefined : onCloseCompoundExpand}
            >
              {children}
            </ListViewGroupItemContainer>
          </ListViewGroupItem>
        );
      } else {
        return (
          <ListViewGroupItem expanded={expanded} stacked={stacked} {...other}>
            <ListViewGroupItemHeader
              toggleExpanded={() => this.toggleExpanded()}
            >
              <ListViewExpand
                expanded={expanded}
                toggleExpanded={() => this.toggleExpanded()}
              />
              <ListViewRow
                checkboxInput={checkboxInput}
                leftContent={leftContent}
                heading={heading}
                description={description}
                additionalInfo={additionalInfo}
                actions={actions}
              />
            </ListViewGroupItemHeader>
            <ListViewGroupItemContainer
              expanded={expanded}
              onClose={hideCloseIcon ? undefined : this.toggleExpanded}
            >
              {children}
            </ListViewGroupItemContainer>
          </ListViewGroupItem>
        );
      }
    } else {
      return (
        <ListViewGroupItem stacked={stacked} {...other}>
          <ListViewRow
            checkboxInput={checkboxInput}
            leftContent={leftContent}
            heading={heading}
            description={description}
            additionalInfo={additionalInfo}
            actions={actions}
          />
        </ListViewGroupItem>
      );
    }
  }
}
ListViewItem.propTypes = {
  /** Child node rendered as expanded content of the ListViewItem */
  children: PropTypes.node,
  /** Display the ListViewItem stacked or not */
  stacked: PropTypes.bool.isRequired,
  /** Function triggered when expandable content is expanded */
  onExpand: PropTypes.func,
  /** Function triggered when expandable content is closed */
  onExpandClose: PropTypes.func,
  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions: PropTypes.node,
  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo: PropTypes.arrayOf(PropTypes.node),
  /** Contents of ListViewItem description section */
  description: PropTypes.node,
  /** Contents of ListViewItem heading */
  heading: PropTypes.node,
  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent: PropTypes.node,
  /** Checkbox form input component */
  checkboxInput: PropTypes.node,
  /** Optionally hide the close icon in expanded content */
  hideCloseIcon: PropTypes.bool,
  /** Flag to use compound expansion contents */
  compoundExpand: PropTypes.bool,
  /** Flag to show compound expansion contents */
  compoundExpanded: PropTypes.bool,
  /** Function triggered when compound expandable content is closed */
  onCloseCompoundExpand: PropTypes.func
};
ListViewItem.defaultProps = {
  stacked: false,
  hideCloseIcon: false
};
export default ListViewItem;
