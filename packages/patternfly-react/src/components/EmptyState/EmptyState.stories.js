import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Button } from '../Button';
import { EmptyState } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Empty State`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'Empty State',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}empty-state/`
  })
);

stories.add(
  'EmptyState',
  withInfo()(() => (
    <EmptyState>
      <EmptyState.Icon />
      <EmptyState.Title>Empty State Title</EmptyState.Title>
      <EmptyState.Info>
        This is the Empty State component. The goal of a empty state pattern is to provide a good first impression that
        helps users to achieve their goals. It should be used when a view is empty because no objects exists and you
        want to guide the user to perform specific actions.
      </EmptyState.Info>
      <EmptyState.Help onClick={action('help action')}>
        For more information please see{' '}
        <a
          href="#"
          onClick={event => {
            event.preventDefault();
          }}
        >
          pfExample
        </a>
      </EmptyState.Help>
      <EmptyState.Action>
        <Button bsStyle="primary" bsSize="large" onClick={action('main action')}>
          Main Action
        </Button>
      </EmptyState.Action>
      <EmptyState.Action secondary>
        <Button onClick={action('secondary action 1')} title="Perform an action">
          Secondary Action 1
        </Button>
        <Button onClick={action('secondary action 2')} title="Perform an action">
          Secondary Action 2
        </Button>
        <Button onClick={action('secondary action 3')} title="Perform an action">
          Secondary Action 3
        </Button>
      </EmptyState.Action>
    </EmptyState>
  ))
);
