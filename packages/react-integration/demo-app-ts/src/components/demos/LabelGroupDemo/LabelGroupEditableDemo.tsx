import { Label, LabelGroup } from '@patternfly/react-core';
import React, { Component } from 'react';

interface LabelState {
  label1: string;
  label2: string;
  label3: string;
}

export class LabelGroupEditableDemo extends Component<{}, LabelState> {
  state = {
    label1: 'Editable label',
    label2: 'Editable label 2',
    label3: 'Editable label 3'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onEditCancel = (prevText: string, label: string) => {
    this.setState({
      [label]: prevText
    } as Pick<LabelState, keyof LabelState>);
  };

  onEditComplete = (newText: string, label: string) => {
    this.setState({
      [label]: newText
    } as Pick<LabelState, keyof LabelState>);
  };

  render() {
    return (
      <LabelGroup numLabels={5} isEditable hasEditableTextArea editableTextAreaProps={{ 'aria-label': 'New label' }}>
        <Label
          color="blue"
          onClose={() => {}}
          onEditCancel={(_event, prevText) => this.onEditCancel(prevText, 'label1')}
          onEditComplete={(_event, newText) => this.onEditComplete(newText, 'label1')}
          isEditable
          editableProps={{
            'aria-label': 'Editable text',
            id: 'editable-label-1'
          }}
        >
          {this.state.label1}
        </Label>
        <Label color="green">Static label</Label>
        <Label
          color="blue"
          onClose={() => {}}
          onEditCancel={(_event, prevText) => this.onEditCancel(prevText, 'label2')}
          onEditComplete={(_event, newText) => this.onEditComplete(newText, 'label2')}
          isEditable
          editableProps={{
            'aria-label': 'Editable text 2',
            id: 'editable-label-2'
          }}
        >
          {this.state.label2}
        </Label>
        <Label
          color="blue"
          onClose={() => {}}
          onEditCancel={(_event, prevText) => this.onEditCancel(prevText, 'label3')}
          onEditComplete={(_event, newText) => this.onEditComplete(newText, 'label3')}
          isEditable
          editableProps={{
            'aria-label': 'Editable text 3',
            id: 'editable-label-3'
          }}
        >
          {this.state.label3}
        </Label>
      </LabelGroup>
    );
  }
}
