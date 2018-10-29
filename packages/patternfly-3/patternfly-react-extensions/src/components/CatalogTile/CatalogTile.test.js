import React from 'react';
import { mount } from 'enzyme';
import { Icon } from 'patternfly-react';
import { CatalogTile } from './index';

const pfBrand = '<PatternFly Brand Image here>';
const github = '<GitHub Brand Image here>';

test('CatalogTile renders properly', () => {
  const testTruncationFunction = (text, max) => {
    expect(text).toBe('1234567890123');
    expect(max).toBe(10);
    return 'truncated';
  };

  const component = mount(
    <div>
      <CatalogTile
        id="single-badge-test"
        featured
        iconImg={pfBrand}
        badges={[
          <CatalogTile.Badge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTile.Badge>,
          <CatalogTile.Badge id="no-title">
            <Icon type="fa" name="cog" />
          </CatalogTile.Badge>
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
        iconImg={github}
        badges={[
          <CatalogTile.Badge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTile.Badge>,
          <CatalogTile.Badge title="USDA Approved" id="approved">
            <Icon type="pf" name="ok" />
          </CatalogTile.Badge>
        ]}
        title="GitHub Desktop"
        vendor="provided by GitHub"
        description="Simple collaboration from your desktop."
      />
      <CatalogTile
        id="long-description-test"
        featured
        iconImg={pfBrand}
        badges={[
          <CatalogTile.Badge title="Certified" id="certified">
            <Icon type="fa" name="cog" />
          </CatalogTile.Badge>
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
          <CatalogTile.Badge title="USDA Approved" id="approved">
            <Icon type="pf" name="ok" />
          </CatalogTile.Badge>
        ]}
        title="CodePen"
        vendor="provided by CodePen"
        description="An online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets."
      />
      <CatalogTile
        id="test-custom-truncation"
        featured
        iconImg={pfBrand}
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
    </div>
  );
  expect(component.render()).toMatchSnapshot();
});

test('CatalogTile href renders properly', () => {
  const component = mount(
    <CatalogTile
      id="test-href"
      href="http://patternfly.org"
      featured
      iconImg={pfBrand}
      title="Patternfly"
      vendor="Provided by Red Hat"
      description="1234567890123"
    />
  );
  expect(component.render()).toMatchSnapshot();
});

test('CatalogTile onClick behaves properly', () => {
  const onClickMock = jest.fn();

  const component = mount(
    <CatalogTile
      id="test-on-click"
      className="test-click-class"
      onClick={onClickMock}
      featured
      iconImg={pfBrand}
      title="Patternfly"
      vendor="Provided by Red Hat"
      description="1234567890123"
    />
  );

  component
    .find('#test-on-click.test-click-class')
    .hostNodes()
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
  expect(onClickMock).toBeCalled();
});
