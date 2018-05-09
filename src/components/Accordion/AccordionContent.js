/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { Panel } from 'react-bootstrap';

class AccordionContent extends React.Component {
  componentDidMount() {
    this.updateScroll();
  }
  panelBodyStyles = {};
  /**
   * updateScroll: This function figures out what is the max height a panel element can be before showing scrollbars
   */
  updateScroll = () => {
    const { scrollSelector, fixed } = this.props;

    if (!fixed) {
      return;
    }
    const panelBodyEl = findDOMNode(this.panelBody);
    const accordionEl = findDOMNode(this.panel).parentElement;
    const panelHeadings = accordionEl.querySelectorAll('.panel-heading');
    const headingTotalHeight =
      panelHeadings[0].clientHeight * panelHeadings.length;

    let maxScrollingHeight = Math.max(
      accordionEl.clientHeight - headingTotalHeight,
      25
    );

    if (!scrollSelector) {
      panelBodyEl.style['max-height'] = `${maxScrollingHeight}px`;
      panelBodyEl.style['overflow-y'] = 'auto';
    } else {
      let scrollElContainer = {};
      // We need to iterate the panel bodies children to determine scrollable area
      [...panelBodyEl.children].forEach((child, index) => {
        if (!child.classList.contains(scrollSelector)) {
          maxScrollingHeight -= child.clientHeight;
        } else {
          scrollElContainer = panelBodyEl.children[index];
        }
      });
      scrollElContainer.style['max-height'] = `${maxScrollingHeight}px`;
      scrollElContainer.style['overflow-y'] = 'auto';
    }
  };

  render() {
    const { title, eventKey } = this.props;
    return (
      <Panel
        eventKey={eventKey}
        ref={el => {
          this.panel = el;
        }}
      >
        <Panel.Heading>
          <Panel.Title toggle>{title}</Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body
            ref={el => {
              this.panelBody = el;
            }}
          >
            {this.props.children}
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

AccordionContent.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Unique id for each panel */
  eventKey: PropTypes.string.isRequired,
  /** Optional - Determines if this is a fixed height accordion or not */
  fixed: PropTypes.bool,
  /** Optional - CSS class that contains scrollable content */
  scrollSelector: PropTypes.string,
  /** Title for panel header */
  title: PropTypes.string.isRequired
};
AccordionContent.defaultProps = {
  children: null,
  fixed: false,
  scrollSelector: null
};
export default AccordionContent;
