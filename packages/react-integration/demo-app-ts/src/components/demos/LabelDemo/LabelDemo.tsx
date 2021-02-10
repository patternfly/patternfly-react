import { Label } from '@patternfly/react-core';
import React, { Component } from 'react';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import { Link } from 'react-router-dom';

export class LabelDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Label>Grey</Label> <Label icon={<InfoCircleIcon />}>Grey icon</Label>{' '}
        <Label onClose={() => {}}>Grey removeable</Label>{' '}
        <Label icon={<InfoCircleIcon />} onClose={() => {}}>
          Grey icon removeable
        </Label>{' '}
        <Label href="#">Grey link</Label>{' '}
        <Label href="#" onClose={() => {}}>
          Grey link removeable
        </Label>
        <Label id="truncated-no-tooltip" variant="outline" isTruncated>
          Grey
        </Label>{' '}
        <Label variant="outline" icon={<InfoCircleIcon />}>
          Grey icon
        </Label>{' '}
        <Label variant="outline" onClose={() => {}}>
          Grey removeable
        </Label>{' '}
        <Label variant="outline" icon={<InfoCircleIcon />} onClose={() => {}}>
          Grey icon removeable
        </Label>{' '}
        <Label variant="outline" href="#">
          Grey link
        </Label>{' '}
        <Label variant="outline" href="#" onClose={() => {}}>
          Grey link removeable
        </Label>
        <Label color="blue">Blue</Label>{' '}
        <Label color="blue" icon={<InfoCircleIcon />}>
          Blue icon
        </Label>
        <Label color="blue" id="truncated-label" isTruncated tooltipPosition="top" icon={<InfoCircleIcon />}>
          Very very very very long label text that should be truncated
        </Label>
        <Label id="overflow-label" isOverflowLabel>
          Overflow label
        </Label>
        <Label
          id="router-link"
          color="blue"
          icon={<InfoCircleIcon />}
          isTruncated
          render={({ className, content, componentRef }) => (
            <Link to="/" className={className} innerRef={componentRef}>
              {content}
            </Link>
          )}
        >
          Blue label fake router link with icon that overflows
        </Label>
      </React.Fragment>
    );
  }
}

export default LabelDemo;
