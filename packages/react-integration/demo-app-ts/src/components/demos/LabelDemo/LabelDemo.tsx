import { Label } from '@patternfly/react-core';
import { Component } from 'react';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export class LabelDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Label id="no-tooltip">Grey</Label> <Label icon={<InfoCircleIcon />}>Grey icon</Label>{' '}
        <Label onClose={() => {}}>Grey removeable</Label>{' '}
        <Label icon={<InfoCircleIcon />} onClose={() => {}}>
          Grey icon removeable
        </Label>{' '}
        <Label href="#">Grey link</Label>{' '}
        <Label href="#" onClose={() => {}}>
          Grey link removeable
        </Label>
        <span style={{ width: '150px', display: 'inline-block' }}>
          <Label id="tooltip" variant="outline">
            Very very very very long label text that should be truncated without textMaxWidth
          </Label>
        </span>{' '}
        <Label id="tooltip-max-width" variant="outline" textMaxWidth="150px">
          Very very very very long label text that should be truncated with textMaxWidth
        </Label>{' '}
        <Label id="no-tooltip-max-width" variant="outline" textMaxWidth="150px">
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
        <Label color="blue" tooltipPosition="top" icon={<InfoCircleIcon />} textMaxWidth="150px">
          Very very very very long label text that should be truncated
        </Label>
        <Label isCompact>Compact</Label>
        <Label id="overflow-label" variant="overflow">
          Overflow label
        </Label>
        <Label
          color="blue"
          isEditable
          editableProps={{
            'aria-label': 'Editable text',
            id: 'editable-label'
          }}
        >
          Edit
        </Label>
      </>
    );
  }
}

export default LabelDemo;
