import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { ListGroup, ListGroupItem } from '../ListGroup';
import { name } from '../../../package.json';
import { InfoTip } from './index';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Info Tip`, module);

stories.addDecorator(
  defaultTemplate({
    title: 'InfoTip',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#info-tip`
  })
);

stories.add(
  'InfoTip',
  withInfo()(() => (
    <nav className="navbar navbar-default navbar-pf">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">
          <img src="http://www.patternfly.org/assets/img/brand.svg" alt="PatternFly Enterprise Application" />
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-collapse-1">
        <ul className="nav navbar-nav navbar-utility">
          <InfoTip id="infotip-widget">
            <InfoTip.Toggle>Messages: 2</InfoTip.Toggle>
            <InfoTip.Menu>
              <ListGroup>
                <ListGroupItem>
                  <InfoTip.MenuItemIcon type="pf" name="info" /> Added Datasources TestDS
                </ListGroupItem>
                <ListGroupItem>
                  <InfoTip.MenuItemIcon type="pf" name="info" /> Modified Datasources ExampleDS
                </ListGroupItem>
              </ListGroup>
              <InfoTip.MenuFooter>
                <a href="#">Clear Messages</a>
              </InfoTip.MenuFooter>
            </InfoTip.Menu>
          </InfoTip>
        </ul>
        <ul className="nav navbar-nav navbar-primary">
          <li>
            <a href="#">First Link</a>
          </li>
        </ul>
      </div>
    </nav>
  ))
);
