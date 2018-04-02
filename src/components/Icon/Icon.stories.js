import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Icon } from './index';

const IconStories = storiesOf('Icon', module);

IconStories.addDecorator(withKnobs);
IconStories.addDecorator(
  defaultTemplate({
    title: 'Icons',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_STYLES}icons`
  })
);

IconStories.add(
  'Patternfly Icons',
  withInfo()(() => {
    const iconNames = [
      'ok',
      'error-circle-o',
      'warning-triangle-o',
      'close',
      'edit',
      'key',
      'info',
      'on',
      'print'
    ];
    const iconsList = iconNames.map((iconName, index) => (
      <tr key={index}>
        <td>
          <Icon type="pf" name={iconName} />
        </td>
        <td>{iconName}</td>
        <td>pf</td>
      </tr>
    ));
    const tableHeaders = (
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Type</th>
      </tr>
    );
    const tableStyle = { maxWidth: '300px' };

    return (
      <div>
        <h3>
          <u>Patternfly Icon Examples:</u>
        </h3>
        <table className="table table-striped" style={tableStyle}>
          <thead>{tableHeaders}</thead>
          <tbody>{iconsList}</tbody>
        </table>
      </div>
    );
  })
);

IconStories.add(
  'Font-Awesome Icons',
  withInfo()(() => {
    const iconNames = [
      'arrow-circle-o-down',
      'angle-down',
      'ban',
      'cube',
      'clock-o',
      'check',
      'envelope',
      'filter',
      'refresh'
    ];
    const iconsList = iconNames.map((iconName, index) => (
      <tr key={index}>
        <td>
          <Icon type="fa" name={iconName} />
        </td>
        <td>{iconName}</td>
        <td>fa</td>
      </tr>
    ));
    const tableHeaders = (
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Type</th>
      </tr>
    );

    return (
      <div>
        <h3>
          <u>Patternfly Icon Examples:</u>
        </h3>
        <table className="table table-striped" style={{ maxWidth: '300px' }}>
          <thead>{tableHeaders}</thead>
          <tbody>{iconsList}</tbody>
        </table>
        <br />
        <h3>
          <u>Examples with more props:</u>
        </h3>
        <table className="table table-striped" style={{ maxWidth: '500px' }}>
          <thead>
            <tr>
              <td>Icon</td>
              <td>Name</td>
              <td>Other Props</td>
              <td>Type</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Icon name="spinner" spin size="lg" />
              </td>
              <td>spinner</td>
              <td>{`${`spin | size="lg"`}`}</td>
              <td>fa</td>
            </tr>
            <tr>
              <td>
                <Icon name="check-square" size="2x" />
              </td>
              <td>check-square</td>
              <td>{`${`size="2x"`}`}</td>
              <td>fa</td>
            </tr>
            <tr>
              <td>
                <Icon name="edit" size="3x" />
              </td>
              <td>edit</td>
              <td>{`${`size="3x"`}`}</td>
              <td>fa</td>
            </tr>
            <tr>
              <td>
                <Icon name="star" size="lg" pulse />
              </td>
              <td>star</td>
              <td>{`${`size="lg" | pulse`}`}</td>
              <td>fa</td>
            </tr>
          </tbody>
        </table>
        <h4>
          For more classes and effects you can also check:&nbsp;
          <a
            target="blank"
            href="https://fontawesome.com/how-to-use/svg-with-js"
          >
            https://fontawesome.com/how-to-use/svg-with-js
          </a>
        </h4>
      </div>
    );
  })
);
