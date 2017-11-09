import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Components in this module are used as building blocks for ListViewItem and
 * ListViewRow. If needed, components can be used to create custom ListViewItem
 *
 * Custom ListView example:
 *
 * <ListView>
 *   <ListGroupItem stacked expanded>
 *     <ListGroupItemHeader toggleExpanded={functionToToggle}> // required only if the ListGroupItem is supposed to be expandable
 *       <ListViewExpand expanded />
 *       <ListViewCheckbox />
 *       <ListViewActions>
 *         // buttons, dropdowns...
 *       </ListViewActions>
 *       <ListViewMainInfo>
 *         <ListViewLeft>
 *           <ListViewIcon size="sm" icon={iconClass} />
 *         </ListViewLeft>
 *         <ListViewBody>
 *           <ListViewDescription>
 *             <ListViewDescriptionHeading>
 *               {name}
 *             </ListViewDescriptionHeading>
 *             <ListViewDescriptionText>
 *               {description}
 *             </ListViewDescriptionText>
 *           </ListViewDescription>
 *           <ListViewAdditionalInfo>
 *             <ListViewInfoItem>
 *               <span className="pficon pficon-flavor" />
 *               {Item1}
 *             </ListViewInfoItem>
 *             <ListViewInfoItem>
 *               <span className="pficon pficon-cpu" />
 *               {Item2}
 *             </ListViewInfoItem>
 *           </ListViewAdditionalInfo>
 *         </ListViewBody>
 *       </ListViewMainInfo>
 *     </ListGroupItemHeader>
 *
 *     <ListGroupItemContainer onClose={functionWhichClosesMe} expanded>
 *       <Row>Some content goes here</Row>
 *     </ListGroupItemContainer>
 *
 *   </ListGroupItem>
 *   ...
 * </ListView>
 */

/**
 * ListView component wraps ListViewItems
 */
export const ListView = ({ children, className, ...rest }) => {
  const classes = cx('list-group list-view-pf list-view-pf-view', className)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
ListView.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Children nodes - ListGroupItem or ListViewItem instances */
  children: PropTypes.node
}

/**
 * ListGroupItem is a root node of each ListViewItem
 */
export const ListGroupItem = ({
  children,
  className,
  stacked,
  expanded,
  ...rest
}) => {
  const classes = cx(
    'list-group-item',
    {
      'list-view-pf-expand-active': expanded,
      'list-view-pf-stacked': stacked
    },
    className
  )
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
ListGroupItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Toggles the item expanded */
  expanded: PropTypes.bool.isRequired,
  /** Toggles the item stacked */
  stacked: PropTypes.bool.isRequired
}
ListGroupItem.defaultProps = {
  expanded: false,
  stacked: false
}

/**
 * ListGroupItemHeader is used with expandable ListViewItem, wraps everything
 * that is displayed in non expanded state. Handles the toggling of the expanded
 * state
 */
export const ListGroupItemHeader = ({ children, toggleExpanded }) => {
  const handleClick = e => {
    // ignore selected child elements click
    if (
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'A' &&
      e.target.tagName !== 'INPUT' &&
      !e.target.classList.contains('fa-ellipsis-v')
    ) {
      toggleExpanded()
    }
  }
  return (
    <div className="list-group-item-header" onClick={handleClick}>
      {children}
    </div>
  )
}
ListGroupItemHeader.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Function to execute to trigger toggle */
  toggleExpanded: PropTypes.func.isRequired
}

/**
 * ListGroupItemContainer is used with expandable ListViewItem, wraps the
 * expanded content
 */
export const ListGroupItemContainer = ({ children, expanded, onClose }) => {
  const classes = cx({
    'list-group-item-container container-fluid': true,
    hidden: !expanded
  })
  return (
    <div className={classes}>
      {onClose && (
        <div className="close">
          <span className="pficon pficon-close" onClick={onClose} />
        </div>
      )}
      {expanded && children}
    </div>
  )
}
ListGroupItemContainer.propTypes = {
  /** Children nodes - the content visible in expanded state */
  children: PropTypes.node,
  /** Boolean indicating whether expandable content is visible */
  expanded: PropTypes.bool.isRequired,
  /** Function to call when 'close icon' is clicked */
  onClose: PropTypes.func
}
ListGroupItemContainer.defaultProps = {
  expanded: false
}

/**
 * ListViewCheckbox wraps the input provided as child prop. The input depends
 * on the form solution the consuming application uses (e.g. Field component
 * in case of redux-form)
 */
export const ListViewCheckbox = ({ children, className }) => (
  <div className={cx('list-view-pf-checkbox', className)}>{children}</div>
)

ListViewCheckbox.propTypes = {
  /** Child node - form input component */
  children: PropTypes.node.isRequired,
  /** Additional css classes */
  className: PropTypes.string
}

/**
 * ListViewExpand renders the caret which signifies that row is expandable.
 * The caret icon points to the right when it is closed and down when it is expanded.
 */
export const ListViewExpand = ({ children, expanded, toggleExpanded }) => {
  const classes = cx({
    'fa fa-angle-right': true,
    'fa-angle-down': expanded
  })
  return (
    <div
      className={cx('list-view-pf-expand', { active: expanded })}
      onClick={e => {
        e.stopPropagation()
        toggleExpanded()
      }}
    >
      <span className={classes} />
      {children}
    </div>
  )
}
ListViewExpand.propTypes = {
  /** Child nodes which render additional content - used in expandable ListViewInfoItem */
  children: PropTypes.node,
  /** Expanded state toggle */
  expanded: PropTypes.bool.isRequired,
  /** Function to execute to trigger toggle */
  toggleExpanded: PropTypes.func.isRequired
}
ListViewExpand.defaultProps = {
  expanded: false
}

/** ListViewActions wraps ListViewItem actions and positions them to the right */
export const ListViewActions = ({ children }) => (
  <div className="list-view-pf-actions">{children}</div>
)
ListViewActions.propTypes = {
  /** Child nodes which render individual actions - Buttons, DropdownKebab... */
  children: PropTypes.node
}

/**
 * ListViewMainInfo wraps the informational content of the ListViewItem
 */
export const ListViewMainInfo = ({ children }) => (
  <div className="list-view-pf-main-info">{children}</div>
)
ListViewMainInfo.propTypes = {
  /** Child nodes - instances of ListViewLeft and ListViewBody */
  children: PropTypes.node
}

/** ListViewLeft renders nodes positioned on the left side of ListViewItem row */
export const ListViewLeft = ({ children }) => (
  <div className="list-view-pf-left">{children}</div>
)
ListViewLeft.propTypes = {
  /** Child nodes - usually ListViewIcon instance */
  children: PropTypes.node
}

/** ListViewIcon used as a default content for ListViewLeft */
export const ListViewIcon = ({ icon, size, ...rest }) => {
  return <span className={cx(`list-view-pf-icon-${size}`, icon)} {...rest} />
}
ListViewIcon.propTypes = {
  /** CSS classes identifying the icon */
  icon: PropTypes.string.isRequired,
  /** Icon size (sm, md, lg), defaults to 'sm' */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}
ListViewIcon.defaultProps = {
  size: 'sm'
}

/**
 * ListViewBody wraps the central section of ListViewItem
 */
export const ListViewBody = ({ children }) => (
  <div className="list-view-pf-body">{children}</div>
)
ListViewBody.propTypes = {
  /** Child nodes - ListViewDescription or ListViewAdditionalInfo instances */
  children: PropTypes.node
}

/**
 * ListViewDescription wraps Heading and Text
 */
export const ListViewDescription = ({ children }) => (
  <div className="list-view-pf-description">{children}</div>
)
ListViewDescription.propTypes = {
  /** Child nodes - ListViewDescriptionHeading or ListViewDescriptionText instances */
  children: PropTypes.node
}

/**
 * ListViewDescriptionHeading renders ListViewItem heading
 */
export const ListViewDescriptionHeading = ({ children }) => (
  <div className="list-group-item-heading">{children}</div>
)
ListViewDescriptionHeading.propTypes = {
  /** Child node - content rendered as heading */
  children: PropTypes.node
}

/**
 * ListViewDescriptionText renders text content of ListViewItem
 */
export const ListViewDescriptionText = ({ children }) => (
  <div className="list-group-item-text">{children}</div>
)
ListViewDescriptionText.propTypes = {
  /** Child node - content rendered in text section of ListViewItem */
  children: PropTypes.node
}

/** ListViewAdditionalInfo defines additional info section */
export const ListViewAdditionalInfo = ({ children }) => (
  <div className="list-view-pf-additional-info">{children}</div>
)
ListViewAdditionalInfo.propTypes = {
  /** Child nodes - an array of ListViewInfoItem instances */
  children: PropTypes.arrayOf(PropTypes.node)
}

/**
 * ListViewInfoItem renders contents of individual Info item
 */
export const ListViewInfoItem = ({ children, className, stacked, ...rest }) => {
  const classes = cx(
    { 'list-view-pf-additional-info-item-stacked': stacked },
    'list-view-pf-additional-info-item',
    className
  )
  return (
    <div className={classes} onClick={e => e.stopPropagation()} {...rest}>
      {children}
    </div>
  )
}
ListViewInfoItem.propTypes = {
  /** Child node - contents of the additional info item */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Toggle the InfoItem contents stacking */
  stacked: PropTypes.bool.isRequired
}
ListViewInfoItem.defaultProps = {
  stacked: false
}
