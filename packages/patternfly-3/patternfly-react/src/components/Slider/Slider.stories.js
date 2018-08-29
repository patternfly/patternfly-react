import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Slider } from './index';
import { Form, FormControl, ControlLabel, FormGroup, Col } from '../../index';
import { name } from '../../../package.json';

const SliderStories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Slider`,
  module
);

SliderStories.addDecorator(withKnobs);
SliderStories.addDecorator(
  defaultTemplate({
    title: 'Slider',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}slider`
  })
);

SliderStories.addWithInfo('Slider', () => (
  <div>
    <p>
      The component uses the Bootstrap-slider library, for more reading and available props please visit:
      <a href="https://github.com/seiyria/bootstrap-slider">&nbsp;https://github.com/seiyria/bootstrap-slider</a>
    </p>
    <br />
    <br />

    <div className="container">
      <Slider id="slider-one" min={0} max={100} showBoundaries step={1} value={50} tooltip="show" />

      <br />
      <br />
      <br />

      <Slider
        id="slider-two"
        min={1}
        max={5}
        step={1}
        value={3}
        tooltip="show"
        ticks={[1, 2, 3, 4, 5]}
        ticks_labels={['1', '2', '3', '4', '5']}
      />

      <br />
      <br />

      <h2>Example of a slider in a form</h2>
      <br />

      <Form horizontal>
        <FormGroup>
          <Col sm={10}>
            <Slider
              label="Size"
              id="slider"
              min={1}
              max={5}
              step={1}
              value={3}
              tooltip="show"
              ticks={[1, 2, 3, 4, 5]}
              ticks_labels={['1', '2', '3', '4', '5']}
            />
          </Col>
        </FormGroup>

        <br />

        <FormGroup>
          <Col sm={10}>
            <Col sm={2}>
              <ControlLabel>Name</ControlLabel>
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Please Enter Your Full Name" />
            </Col>
          </Col>
        </FormGroup>

        <br />
        <br />

        <FormGroup>
          <Col sm={10}>
            <Slider label="Size" id="size" min={0} max={100} tooltip="show" showBoundaries input inputFormat="GB" />
          </Col>
        </FormGroup>

        <br />

        <FormGroup>
          <Col sm={10} smOffset={2}>
            <button type="submit" className="btn btn-default">
              Sign in
            </button>
          </Col>
        </FormGroup>
      </Form>

      <br />

      <Slider id="slider-pf" min={0} max={100} tooltip="show" showBoundaries input inputFormat="GB" />

      <br />
      <br />
      <br />

      <Slider id="slider-pf" min={0} max={100} tooltip="show" showBoundaries input dropdownList={['MB', 'GB']} dropup />
    </div>
  </div>
));
