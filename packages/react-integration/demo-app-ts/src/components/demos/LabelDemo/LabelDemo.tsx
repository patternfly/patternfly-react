import { Label } from '@patternfly/react-core';
import React, { Component } from 'react';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';

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
        <Label variant="outline">Grey</Label>{' '}
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
      </React.Fragment>
    );
  }
}

export default LabelDemo;
