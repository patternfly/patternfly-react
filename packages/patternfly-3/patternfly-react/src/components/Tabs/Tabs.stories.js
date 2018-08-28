import React from 'react';
import classNames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { TabContainer, Nav, NavItem, NavDropdown, MenuItem, TabPane, TabContent } from '../../index';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Tabs`, module);
const description = (
  <p>
    This component is based on React Bootstrap Tabs component. See{' '}
    <a href="https://react-bootstrap.github.io/components.html#tabs">React Bootstrap Docs</a> for complete Tabs
    component documentation.
  </p>
);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Tabs',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}#tabs`,
    description
  })
);

stories.add(
  'Basic Tabs',
  withInfo()(() => {
    const bsClass = classNames('nav nav-tabs', {
      'nav-justified': boolean('Justified', false)
    });
    const t1Disabled = boolean('Tab 1 Disabled', false);
    const t1Title = (
      <div
        dangerouslySetInnerHTML={{
          __html: text('Tab 1 Tittle', 'Tab 1')
        }}
      />
    );
    const t2Disabled = boolean('Tab 2 Disabled', false);
    const t2Title = (
      <div
        dangerouslySetInnerHTML={{
          __html: text('Tab 2 Tittle', 'Tab 2')
        }}
      />
    );
    const t3Disabled = boolean('Tab 3 Disabled', false);
    const t3Title = (
      <div
        dangerouslySetInnerHTML={{
          __html: text('Tab 3 Tittle', 'Tab 3')
        }}
      />
    );

    return (
      <TabContainer id="basic-tabs" defaultActiveKey={1}>
        <div>
          <Nav bsClass={bsClass} onSelect={action('selected')}>
            <NavItem eventKey={1} disabled={t1Disabled}>
              {t1Title}
            </NavItem>
            <NavItem eventKey={2} disabled={t2Disabled}>
              {t2Title}
            </NavItem>
            <NavItem eventKey={3} disabled={t3Disabled}>
              {t3Title}
            </NavItem>
          </Nav>
          <TabContent animation>
            <TabPane eventKey={1}>Tab 1 content</TabPane>
            <TabPane eventKey={2}>Tab 2 content</TabPane>
            <TabPane eventKey={3}>Tab 3 content</TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  })
);

stories.add(
  'Basic Tabs - PF style',
  withInfo()(() => {
    const bsClass = classNames('nav nav-tabs nav-tabs-pf', {
      'nav-justified': boolean('Justified', false)
    });
    const t1Disabled = boolean('Tab 1 Disabled', false);
    const t1Title = (
      <div
        dangerouslySetInnerHTML={{
          __html: text('Tab 1 Tittle', 'Tab 1')
        }}
      />
    );
    const t2Disabled = boolean('Tab 2 Disabled', false);
    const t2Title = (
      <div
        dangerouslySetInnerHTML={{
          __html: text('Tab 2 Tittle', 'Tab 2')
        }}
      />
    );
    const t3Disabled = boolean('Tab 3 Disabled', false);
    const t3Title = (
      <div
        dangerouslySetInnerHTML={{
          __html: text('Tab 3 Tittle', 'Tab 3')
        }}
      />
    );

    return (
      <TabContainer id="basic-tabs-pf" defaultActiveKey={1}>
        <div>
          <Nav bsClass={bsClass} onSelect={action('selected')}>
            <NavItem eventKey={1} disabled={t1Disabled}>
              {t1Title}
            </NavItem>
            <NavItem eventKey={2} disabled={t2Disabled}>
              {t2Title}
            </NavItem>
            <NavItem eventKey={3} disabled={t3Disabled}>
              {t3Title}
            </NavItem>
          </Nav>
          <TabContent animation>
            <TabPane eventKey={1}>Tab 1 content</TabPane>
            <TabPane eventKey={2}>Tab 2 content</TabPane>
            <TabPane eventKey={3}>Tab 3 content</TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  })
);

stories.add(
  'Tabs with Dropdown',
  withInfo()(() => {
    const bsClass = classNames('nav nav-tabs', {
      'nav-justified': boolean('Justified', false)
    });

    return [
      <p>
        <b>Note:</b>
        This variation is not keyboard accessible and is not recommended for use where accessibility is a priority.
      </p>,
      <TabContainer id="tabs-with-dropdown" defaultActiveKey="first">
        <div>
          <Nav bsClass={bsClass} onSelect={action('selected')}>
            <NavItem eventKey="first">Tab 1</NavItem>
            <NavItem eventKey="second">Tab 2</NavItem>
            <NavDropdown eventKey="3" title="Tab 3">
              <MenuItem eventKey="3.1">Action</MenuItem>
              <MenuItem eventKey="3.2">Another action</MenuItem>
              <MenuItem eventKey="3.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="3.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <TabContent animation>
            <TabPane eventKey="first">Tab 1 content</TabPane>
            <TabPane eventKey="second">Tab 2 content</TabPane>
            <TabPane eventKey="3.1">Tab 3.1 content</TabPane>
            <TabPane eventKey="3.2">Tab 3.2 content</TabPane>
            <TabPane eventKey="3.3">Tab 3.3 content</TabPane>
            <TabPane eventKey="3.4">Tab 3.4 content</TabPane>
          </TabContent>
        </div>
      </TabContainer>
    ];
  })
);

stories.add(
  'Tabs with Dropdown - PF style',
  withInfo()(() => {
    const bsClass = classNames('nav nav-tabs nav-tabs-pf', {
      'nav-justified': boolean('Justified', false)
    });

    return [
      <p>
        <b>Note:</b>
        This variation is not keyboard accessible and is not recommended for use where accessibility is a priority.
      </p>,
      <TabContainer id="tabs-with-dropdown-pf" defaultActiveKey="first">
        <div>
          <Nav bsClass={bsClass} onSelect={action('selected')}>
            <NavItem eventKey="first">Tab 1</NavItem>
            <NavItem eventKey="second">Tab 2</NavItem>
            <NavDropdown eventKey="3" title="Tab 3">
              <MenuItem eventKey="3.1">Action</MenuItem>
              <MenuItem eventKey="3.2">Another action</MenuItem>
              <MenuItem eventKey="3.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="3.4">Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <TabContent animation>
            <TabPane eventKey="first">Tab 1 content</TabPane>
            <TabPane eventKey="second">Tab 2 content</TabPane>
            <TabPane eventKey="3.1">Tab 3.1 content</TabPane>
            <TabPane eventKey="3.2">Tab 3.2 content</TabPane>
            <TabPane eventKey="3.3">Tab 3.3 content</TabPane>
            <TabPane eventKey="3.4">Tab 3.4 content</TabPane>
          </TabContent>
        </div>
      </TabContainer>
    ];
  })
);

stories.add(
  'Secondary Tabs',
  withInfo()(() => {
    const bsClass = classNames('nav nav-tabs nav-tabs-pf nav-tabs-pf-secondary', {
      'nav-justified': boolean('Secondary Tabs Justified', false)
    });

    return (
      <TabContainer id="secondary-tabs" defaultActiveKey={1}>
        <div>
          <Nav bsStyle="tabs" onSelect={action('selected')}>
            <NavItem eventKey={1} title="Tab 1">
              Tab 1
            </NavItem>
            <NavItem eventKey={2} title="Tab 2">
              Tab 2
            </NavItem>
            <NavItem eventKey={3} title="Tab 3">
              Tab 3
            </NavItem>
          </Nav>
          <TabContent animation>
            <TabPane eventKey={1}>
              <TabContainer id="secondary-tabs-1" defaultActiveKey={1.1}>
                <div>
                  <Nav bsClass={bsClass} onSelect={action('selected')}>
                    <NavItem eventKey={1.1}>Tab A</NavItem>
                    <NavItem eventKey={1.2}>Tab B</NavItem>
                    <NavItem eventKey={1.3}>Tab C</NavItem>
                  </Nav>
                  <TabContent animation>
                    <TabPane eventKey={1.1}>Tab A content</TabPane>
                    <TabPane eventKey={1.2}>Tab B content</TabPane>
                    <TabPane eventKey={1.3}>Tab C content</TabPane>
                  </TabContent>
                </div>
              </TabContainer>
            </TabPane>
            <TabPane eventKey={2}>
              <TabContainer id="secondary-tabs-2" defaultActiveKey={2.1}>
                <div>
                  <Nav bsClass={bsClass} onSelect={action('selected')}>
                    <NavItem eventKey={2.1}>Tab D</NavItem>
                    <NavItem eventKey={2.2}>Tab E</NavItem>
                    <NavItem eventKey={2.3}>Tab F</NavItem>
                  </Nav>
                  <TabContent animation>
                    <TabPane eventKey={2.1}>Tab D content</TabPane>
                    <TabPane eventKey={2.2}>Tab E content</TabPane>
                    <TabPane eventKey={2.3}>Tab F content</TabPane>
                  </TabContent>
                </div>
              </TabContainer>
            </TabPane>
            <TabPane eventKey={3}>
              <TabContainer id="secondary-tabs-3" defaultActiveKey={3.1}>
                <div>
                  <Nav bsClass={bsClass} onSelect={action('selected')}>
                    <NavItem eventKey={3.1}>Tab G</NavItem>
                    <NavItem eventKey={3.2}>Tab H</NavItem>
                    <NavItem eventKey={3.3}>Tab I</NavItem>
                  </Nav>
                  <TabContent animation>
                    <TabPane eventKey={3.1}>Tab G content</TabPane>
                    <TabPane eventKey={3.2}>Tab H content</TabPane>
                    <TabPane eventKey={3.3}>Tab I content</TabPane>
                  </TabContent>
                </div>
              </TabContainer>
            </TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  })
);
