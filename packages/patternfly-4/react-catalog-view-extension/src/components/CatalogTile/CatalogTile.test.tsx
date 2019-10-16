import React from 'react';
import { CogIcon, OutlinedCheckCircleIcon } from '@patternfly/react-icons';
import { shallow, mount } from 'enzyme';

import { CatalogTile } from './CatalogTile';
import { CatalogTileBadge } from './CatalogTileBadge';

test('CatalogTile renders properly', () => {
  const testTruncationFunction = (text: React.ReactNode | string, max: number) => {
    expect(text).toBe('1234567890123');
    expect(max).toBe(10);
    return 'truncated';
  };

  const component = mount(
    <div>
      <CatalogTile
        id="single-badge-test"
        featured
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <CogIcon />
          </CatalogTileBadge>,
          <CatalogTileBadge id="no-title">
            <CogIcon />
          </CatalogTileBadge>
        ]}
        title="Patternfly"
        vendor={
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        }
        description="A community of designers and developers collaborating to build a UI framework for enterprise web applications."
      />
      <CatalogTile
        id="multi-badge-test"
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <CogIcon />
          </CatalogTileBadge>,
          <CatalogTileBadge title="USDA Approved" id="approved">
            <OutlinedCheckCircleIcon />
          </CatalogTileBadge>
        ]}
        title="GitHub Desktop"
        vendor="provided by GitHub"
        description="Simple collaboration from your desktop."
      />
      <CatalogTile
        id="long-description-test"
        featured
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <CogIcon />
          </CatalogTileBadge>
        ]}
        title="Patternfly"
        vendor={
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        }
        description={
          'This is a very long description that should be truncated after 112 characters. ' +
          '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
          'to truncate the description how you see fit. It will be passed the description and max length.'
        }
        maxDescriptionLength={112}
      />
      <CatalogTile
        id="test-iconClass"
        iconClass="fa fa-codepen"
        badges={[
          <CatalogTileBadge title="USDA Approved" id="approved">
            <OutlinedCheckCircleIcon />
          </CatalogTileBadge>
        ]}
        title="CodePen"
        vendor="provided by CodePen"
        description="An online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets."
      />
      <CatalogTile
        id="test-custom-truncation"
        featured
        title="Patternfly"
        vendor={
          <span>
            Provided by <a href="redhat.com">Red Hat</a>
          </span>
        }
        description="1234567890123"
        maxDescriptionLength={10}
        truncateDescriptionFn={testTruncationFunction}
      />
      <CatalogTile
        id="tile-footer-test"
        featured
        href="https://github.com/patternfly/patternfly-react"
        badges={[
          <CatalogTileBadge title="Certified" id="certified">
            <CogIcon />
          </CatalogTileBadge>
        ]}
        title="Patternfly-React"
        vendor="provided by Red Hat"
        description={
          'This is a very long description that should be truncated after 112 characters. ' +
          '112 is the default but can be overridden if need be. You can also provide a custom truncation function ' +
          'to truncate the description how you see fit. It will be passed the description, max length, and id.'
        }
        footer={
          <span>
            <OutlinedCheckCircleIcon /> Enabled
          </span>
        }
      />
      <CatalogTile
        id="custom-icon-svg-test"
        featured
        title="Custom SVG"
        href="https://github.com/patternfly/patternfly-react"
        icon={
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
          </svg>
        }
      />
    </div>
  );
  expect(component).toMatchSnapshot();
});

test('CatalogTile href renders properly', () => {
  const view = mount(
    <CatalogTile
      id="test-href"
      href="http://patternfly.org"
      featured
      title="Patternfly"
      vendor="Provided by Red Hat"
      description="1234567890123"
    />
  );
  expect(view).toMatchSnapshot();
});

test('CatalogTile onClick behaves properly', () => {
  const onClickMock = jest.fn();

  const view = mount(
    <CatalogTile
      id="test-on-click"
      className="test-click-class"
      onClick={onClickMock}
      featured
      title="Patternfly"
      vendor="Provided by Red Hat"
      description="1234567890123"
    />
  );

  view
    .find('#test-on-click.test-click-class')
    .hostNodes()
    .simulate('click');
  expect(view).toMatchSnapshot();
  expect(onClickMock).toBeCalled();
});
