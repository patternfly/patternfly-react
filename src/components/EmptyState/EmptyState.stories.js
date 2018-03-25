import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { EmptyStatePattern } from './index';

const stories = storiesOf('EmptyState', module);

stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Empty State',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
    }empty-state/`
  })
);

const createAction = name => ({
  onClick: action(name),
  title: text(`${name} Title`, 'Perform an action'),
  children: text(`${name} Children`, name)
});

const getPatternData = () => ({
  title: text('Title', 'Empty State Title'),
  info: text(
    'Info',
    `This is the Empty State component. The goal of a empty state pattern is to
  provide a good first impression that helps users to achieve their goals.
  It should be used when a view is empty because no objects exists and you
  want to guide the user to perform specific actions.`
  ),
  help: (
    <span onClick={action('help action')}>
      For more information please see{' '}
      <a
        href="#"
        onClick={event => {
          event.preventDefault();
        }}
      >
        pfExample
      </a>
    </span>
  ),
  mainAction: createAction('Main Action'),
  actions: [
    'Secondary Action 1',
    'Secondary Action 2',
    'Secondary Action 3'
  ].map(actionName => createAction(actionName))
});

stories.addWithInfo('EmptyState', () => EmptyStatePattern(getPatternData()));

stories.addWithInfo('EmptyState Pattern', () => (
  <EmptyStatePattern {...getPatternData()} />
));
