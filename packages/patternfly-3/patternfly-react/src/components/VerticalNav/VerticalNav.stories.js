import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';

import { mockNavItems } from './__mocks__/mockNavItems';
import { MockIconBarChildren } from './__mocks__/mockIconBarChildren';
import { basicExample } from './__mocks__/basicExample';
import { MockWithMastHeadComponent, mockWithMastHeadSource } from './__mocks__/mockWithMastHeadComponent';

import pfLogo from 'storybook/img/logo-alt.svg';
import pfBrand from 'storybook/img/brand-alt.svg';

import { VerticalNav, Icon, MenuItem, Dropdown } from '../../index';

const { Masthead, Brand, IconBar, Item } = VerticalNav;

import { name } from '../../../package.json';

// Vertical Nav CSS uses position: fixed, but storybook doesn't render components at the top of the page body.
// We need this little bit of magic to force position: fixed children to render relative to the storybook body.
// translateZ trick found at https://stackoverflow.com/a/38796408.
// This emulates the effects of <html class="layout-pf layout-pf-fixed"> too (60px padding)
const MockFixedLayout = props => (
  <div style={{ transform: 'translateZ(0)', height: '100vh', paddingTop: '60px' }}>{props.children}</div>
);
MockFixedLayout.propTypes = { children: PropTypes.node.isRequired };

const mockBodyContainer = className => (
  <div
    className={classNames(
      'container-fluid container-cards-pf container-pf-nav-pf-vertical nav-pf-persistent-secondary',
      className
    )}
  >
    <div className="row row-cards-pf">
      <p>Body Content Here! Body Content Here! Body Content Here! 1</p>
      <p>Body Content Here! Body Content Here! Body Content Here! 2</p>
      <p>Body Content Here! Body Content Here! Body Content Here! 3</p>
      <p>Body Content Here! Body Content Here! Body Content Here! 4</p>
      <p>Body Content Here! Body Content Here! Body Content Here! 5</p>
    </div>
  </div>
);

// TODO: we should fix this issue and remove this message.
const propTypesAreBroke = `***Note: Prop Type descriptions are missing on this page
due to a Storybook bug. Please see the source code for propType description comments.***`;

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.NAVIGATION}/Vertical Navigation`, module);
stories.addDecorator(withKnobs);
stories.addDecorator(
  defaultTemplate({
    title: 'Vertical Navigation',
    description: 'Please click "Show Info" for example source and component documentation.',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION}vertical-navigation/`
  })
);

stories.add(
  'Items as JSX',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: `Example with simple masthead and navigation items expressed as simple JSX children.\n
Tips:\n
* You can save some typing in your JSX by importing the child components like this:
\`\`\`\nimport { VerticalNav } from 'patternfly-react';
const { Masthead, Brand, IconBar, Item, SecondaryItem, TertiaryItem } = VerticalNav;
\`\`\`\n
* To control what happens on item selection, you can either pass an **href** or an **onClick**
prop to the item, or you can pass an **onItemClick** and/or **onNavigate** prop to VerticalNav, or both.\n
* To control which item is active, pass the **active** prop to an item. Otherwise,
the component will track its own active item state internally.\n
* Item, SecondaryItem and TertiaryItem will throw console warnings if used at the wrong depth.\n
* Items can also be expressed as JavaScript objects, see the 'Items as Objects' story.\n
${propTypesAreBroke}`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        {basicExample({ sessionKey: 'storybookItemsAsJsx' })}
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'Items as Objects',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: `Example with simple masthead and navigation items expressed as an array of JavaScript objects.\n
Important things to know about item objects:\n
* We use **'subItems'** for nesting instead of 'children', to avoid confusion with React children.\n
* All of the props available on the **VerticalNavItem** component are also available as a property
of the item object, and vice versa. See the Prop Types in the 'Items as JSX' story info for available item properties.
* This includes the use of **subItems as a JSX prop**. You can, e.g., map over your items array and express your
primary items with custom JSX, but pass the secondary items as subItems (which implicitly includes any tertiary subItems)
instead of having to map out and write JSX for all three levels.\n
Example items array (pretty-printed version of what's in the Story Source below):
\`\`\`\nconst items = ${JSON.stringify(mockNavItems, null, 2)}\n\`\`\`\n
${propTypesAreBroke}`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        <VerticalNav sessionKey="storybookItemsAsObjects" items={mockNavItems} showBadges>
          <Masthead title="Patternfly React" />
        </VerticalNav>
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'Controlled State',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: `VerticalNav includes state that "just works", but it can also be used in a partially or fully stateless mode.\n
Special optional props called Controlled State props are available, and if passed they will override the corresponding
internal state value and allow you to use that part of the component statelessly. If you don't use these props,
the component will fall back on appropriate stateful behavior.\n
Controlled State props for VerticalNav: **isMobile, showMobileNav, navCollapsed, activePath, hoverPath, mobilePath**.\n
Controlled State props for Item, SecondaryItem and TertiaryItem: **active, hovered, selectedOnMobile, pinned**.\n
${propTypesAreBroke}`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        <VerticalNav sessionKey="storybookControlledState">
          <Masthead title="Patternfly React" />
          <Item title="Item 1" active />
          <Item title="Item 2" />
        </VerticalNav>
        {mockBodyContainer()}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'Pinnable Menus',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: `Example using the **pinnableMenus** prop. (items from 'Items as JSX')\n\n${propTypesAreBroke}`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        {basicExample({
          sessionKey: 'storybookPinnableMenus',
          pinnableMenus: true
        })}
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'No Hover Delay',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: `Example using the **hoverDelay** prop set to 0. (items from 'Items as JSX')\n\n${propTypesAreBroke}`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        {basicExample({
          sessionKey: 'storybookNoHoverDelay',
          hoverDelay: 0
        })}
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'Hover Disabled',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: `Example using the **hoverDisabled** prop. (items from 'Items as JSX')\n\n${propTypesAreBroke}`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        {basicExample({
          sessionKey: 'storybookHoverDisabled',
          hoverDisabled: true
        })}
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'Persistence Disabled',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: `Example using the **persist** prop. (items from 'Items as JSX')\n\n${propTypesAreBroke}`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        {basicExample({
          persist: false
        })}
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'Custom Masthead',
  withInfo({
    propTablesExclude: [MockFixedLayout, MockIconBarChildren, Icon, MenuItem, Dropdown, Dropdown.Menu, Dropdown.Toggle],
    text: `Example using the **Masthead**, **Brand** and **IconBar** components with images. (items from 'Items as Objects').`
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        <VerticalNav sessionKey="storybookCustomMasthead" items={mockNavItems} showBadges>
          <Masthead>
            <Brand iconImg={pfLogo} titleImg={pfBrand} />
            <IconBar>
              <MockIconBarChildren />
            </IconBar>
          </Masthead>
        </VerticalNav>
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);

stories.add(
  'With Masthead component no collapse',
  withInfo({
    propTablesExclude: [MockFixedLayout],
    text: (
      <div>
        <h1>Example using the **Masthead** component</h1>
        <h2>Story Source</h2>
        <pre>{mockWithMastHeadSource}</pre>
      </div>
    )
  })(() => (
    <MockFixedLayout>
      <div className="layout-pf layout-pf-fixed faux-layout">
        <MockWithMastHeadComponent />
        {mockBodyContainer('nav-pf-vertical-with-badges')}
      </div>
    </MockFixedLayout>
  ))
);
