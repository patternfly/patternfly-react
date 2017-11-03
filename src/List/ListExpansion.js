import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ListContainer from './ListContainer'
import ListExpand from './ListExpand'

/**
 * ListExpansion - main ListExpansion component which handles the expansion logic.
 * ListExpansion is considered expandable if it has children. In that case it
 * renders ListExpand
 */
export default class ListExpansion extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: props.initiallyExpanded || false }
  }
  toggleExpanded() {
    const { onExpand, onExpandClose } = this.props
    if (this.state.expanded) {
      onExpandClose && onExpandClose()
    } else {
      onExpand && onExpand()
    }
    this.setState(prevState => ({ expanded: !prevState.expanded }))
  }
  renderChildren() {
    const expanded = this.state.expanded
    return React.Children.map(this.props.children, child => {
      /**
       * Collapse/decollapse child ListExpansion elements
       */
      if (child && child.type === ListExpansion) {
        return React.cloneElement(child, {
          collapse: expanded
        })
      } else {
        return child
      }
    })
  }
  render() {
    const {
      children,
      content,
      className,
      collapse,
      initiallyExpanded,
      ...rest
    } = this.props
    const { expanded } = this.state
    const classes = cx(
      'list-pf-expansion',
      'collapse',
      {
        in: collapse
      },
      className
    )

    if (children) {
      return (
        <div className={classes} {...rest}>
          <ListContainer toggleExpanded={() => this.toggleExpanded()}>
            <ListExpand
              expanded={expanded}
              toggleExpanded={() => this.toggleExpanded()}
            />
            {content}
          </ListContainer>
          {this.renderChildren()}
        </div>
      )
    } else {
      return (
        <div className={classes} {...rest}>
          <ListContainer>{content}</ListContainer>
        </div>
      )
    }
  }
}
ListExpansion.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** content */
  content: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Function triggered when expandable content is expanded */
  onExpand: PropTypes.func,
  /** Function triggered when expandable content is closed */
  onExpandClose: PropTypes.func,
  /** Whether to collapse the expansion */
  collapse: PropTypes.bool.isRequired,
  /** override to initially expand the list item */
  initiallyExpanded: PropTypes.bool
}
ListExpansion.defaultProps = {
  collapse: false
}
