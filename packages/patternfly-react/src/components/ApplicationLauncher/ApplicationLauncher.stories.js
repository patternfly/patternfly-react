import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { NavApplicationLauncherStory, WrapperNavApplicationLauncherStory } from './Stories/index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.APPLICATION_FRAMEWORK}/Launcher`, module);
stories.addDecorator(withKnobs);

NavApplicationLauncherStory(stories);
WrapperNavApplicationLauncherStory(stories);
