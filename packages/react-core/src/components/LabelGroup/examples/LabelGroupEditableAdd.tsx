import React from 'react';
import { LabelGroup, Label } from '@patternfly/react-core';

export const LabelGroupEditableAdd: React.FunctionComponent = () => {
  const [idIndex, setIdIndex] = React.useState<number>(3);
  const [labels, setLabels] = React.useState<any>([
    { name: 'Label 1', id: 0 },
    { name: 'Label 2', id: 1 },
    {
      name: 'Label 3',
      props: {
        isEditable: true,
        editableProps: {
          'aria-label': 'Editable label with text Label 3'
        }
      },
      id: 2
    }
  ]);

  const onClose = (labelId: string) => {
    setLabels(labels.filter((l: any) => l.id !== labelId));
  };

  const onEdit = (nextText: string, index: number) => {
    const copy = [...labels];
    const updatedProps = {
      ...labels[index].props,
      editableProps: { 'aria-label': `Editable label with text ${nextText}` }
    };

    copy[index] = { name: nextText, props: updatedProps, id: labels[index].id };
    setLabels(copy);
  };

  const onAdd = () => {
    setLabels([
      {
        name: 'New Label',
        props: {
          isEditable: true,
          editableProps: {
            'aria-label': `Editable label with text New Label`
          }
        },
        id: idIndex
      },
      ...labels
    ]);
    setIdIndex(idIndex + 1);
  };

  return (
    <LabelGroup
      categoryName="Label group 1"
      numLabels={5}
      isEditable
      addLabelControl={
        <Label color="blue" variant="outline" isOverflowLabel onClick={onAdd}>
          Add label
        </Label>
      }
    >
      {labels.map((label, index) => (
        <Label
          key={label.id}
          id={label.id}
          color="blue"
          onClose={() => onClose(label.id)}
          onEditCancel={(_event, prevText) => onEdit(prevText, index)}
          onEditComplete={(_event, newText) => onEdit(newText, index)}
          {...label.props}
        >
          {label.name}
        </Label>
      ))}
    </LabelGroup>
  );
};
