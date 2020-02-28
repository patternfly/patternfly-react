import React from 'react';
import { mount } from 'enzyme';

import { Button, DropdownButton, Icon, Form, Grid, MenuItem, Modal } from '../../index';

test('Inline Form renders properly', () => {
  const component = mount(
    <Form inline>
      <Form.FormGroup controlId="email" placeholder="Email">
        <Form.FormControl type="email" placeholder="Email" />
      </Form.FormGroup>
      <Form.FormGroup controlId="password" placeholder="Password">
        <Form.FormControl type="password" placeholder="Password" />
      </Form.FormGroup>
      <Button bsStyle="primary">Log In</Button>
    </Form>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Horizontal Form renders properly', () => {
  const component = mount(
    <Form horizontal>
      <Form.FormGroup controlId="name">
        <Grid.Col componentClass={Form.ControlLabel} sm={3}>
          Name
        </Grid.Col>
        <Grid.Col sm={9}>
          <Form.FormControl type="text" />
          <Form.HelpBlock>Enter your name</Form.HelpBlock>
        </Grid.Col>
      </Form.FormGroup>
      <Form.FormGroup controlId="address">
        <Grid.Col componentClass={Form.ControlLabel} sm={3}>
          Address
        </Grid.Col>
        <Grid.Col sm={9}>
          <Form.FormControl type="address" disabled />
          <Form.HelpBlock>Enter your address</Form.HelpBlock>
        </Grid.Col>
      </Form.FormGroup>
      <Form.FormGroup controlId="city">
        <Grid.Col componentClass={Form.ControlLabel} sm={3}>
          City
        </Grid.Col>
        <Grid.Col sm={9}>
          <Form.FormControl type="text" disabled />
          <Form.HelpBlock>Enter your city</Form.HelpBlock>
        </Grid.Col>
      </Form.FormGroup>
      <Form.FormGroup controlId="email">
        <Grid.Col componentClass={Form.ControlLabel} sm={3}>
          Email
        </Grid.Col>
        <Grid.Col sm={9}>
          <Form.FormControl type="email" disabled />
          <Form.HelpBlock>Enter a valid email address</Form.HelpBlock>
        </Grid.Col>
      </Form.FormGroup>
      <Form.FormGroup controlId="url">
        <Grid.Col componentClass={Form.ControlLabel} sm={3}>
          My meeting URL
        </Grid.Col>
        <Grid.Col sm={9}>
          <Form.InputGroup>
            <Form.FormControl type="url" />
            <Form.InputGroup.Button>
              <Button>Copy URL</Button>
            </Form.InputGroup.Button>
          </Form.InputGroup>
          <Form.HelpBlock>Enter a valid URL</Form.HelpBlock>
        </Grid.Col>
      </Form.FormGroup>
      <Grid.Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Grid.Col smOffset={3} sm={9}>
          <span>
            <Button bsStyle="primary">Save</Button>
          </span>
          <span>
            <Button bsStyle="default">Cancel</Button>
          </span>
        </Grid.Col>
      </Grid.Row>
    </Form>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Vertical Form renders properly', () => {
  const component = mount(
    <Form>
      <Grid.Row>
        <Grid.Col>
          <Form.FormGroup controlId="name">
            <Form.ControlLabel>Name</Form.ControlLabel>
            <Form.FormControl type="text" />
            <Form.HelpBlock>Enter your name</Form.HelpBlock>
          </Form.FormGroup>
          <Form.FormGroup controlId="address">
            <Form.ControlLabel>Address</Form.ControlLabel>
            <Form.FormControl type="address" />
            <Form.HelpBlock>Enter your address</Form.HelpBlock>
          </Form.FormGroup>
          <Form.FormGroup controlId="city">
            <Form.ControlLabel>City</Form.ControlLabel>
            <Form.FormControl type="text" />
            <Form.HelpBlock>Enter your city</Form.HelpBlock>
          </Form.FormGroup>
          <Form.FormGroup controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.FormControl type="email" />
            <Form.HelpBlock>Enter a valid email address</Form.HelpBlock>
          </Form.FormGroup>
          <Form.FormGroup controlId="url">
            <Form.ControlLabel>My meeting URL</Form.ControlLabel>
            <Form.InputGroup>
              <Form.FormControl type="url" />
              <Form.InputGroup.Button>
                <Button>Copy URL</Button>
              </Form.InputGroup.Button>
            </Form.InputGroup>
            <Form.HelpBlock>Enter a valid URL</Form.HelpBlock>
          </Form.FormGroup>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Grid.Col>
          <span>
            <Button bsStyle="primary">Save</Button>
          </span>
          <span>
            <Button bsStyle="default">Cancel</Button>
          </span>
        </Grid.Col>
      </Grid.Row>
    </Form>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Modal Form renders properly', () => {
  const component = mount(
    <Modal>
      <Modal.Header>
        <Button className="close" aria-hidden="true" aria-label="Close">
          <Icon type="pf" name="close" />
        </Button>
        <Modal.Title>Basic Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form horizontal>
          <Form.FormGroup controlId="name">
            <Grid.Col componentClass={Form.ControlLabel} sm={3}>
              Name
            </Grid.Col>
            <Grid.Col sm={9}>
              <Form.FormControl type="text" />
              <Form.HelpBlock>Enter your name</Form.HelpBlock>
            </Grid.Col>
          </Form.FormGroup>
          <Form.FormGroup controlId="address">
            <Grid.Col componentClass={Form.ControlLabel} sm={3}>
              Address
            </Grid.Col>
            <Grid.Col sm={9}>
              <Form.FormControl type="address" />
              <Form.HelpBlock>Enter your address</Form.HelpBlock>
            </Grid.Col>
          </Form.FormGroup>
          <Form.FormGroup controlId="city">
            <Grid.Col componentClass={Form.ControlLabel} sm={3}>
              City
            </Grid.Col>
            <Grid.Col sm={9}>
              <Form.FormControl type="text" />
              <Form.HelpBlock>Enter your city</Form.HelpBlock>
            </Grid.Col>
          </Form.FormGroup>
          <Form.FormGroup controlId="email">
            <Grid.Col componentClass={Form.ControlLabel} sm={3}>
              Email
            </Grid.Col>
            <Grid.Col sm={9}>
              <Form.FormControl type="email" />
              <Form.HelpBlock>Enter a valid email address</Form.HelpBlock>
            </Grid.Col>
          </Form.FormGroup>
          <Form.FormGroup controlId="url">
            <Grid.Col componentClass={Form.ControlLabel} sm={3}>
              My meeting URL
            </Grid.Col>
            <Grid.Col sm={9}>
              <Form.InputGroup>
                <Form.FormControl type="url" />
                <Form.InputGroup.Button>
                  <Button>Copy URL</Button>
                </Form.InputGroup.Button>
              </Form.InputGroup>
              <Form.HelpBlock>Enter a valid URL</Form.HelpBlock>
            </Grid.Col>
          </Form.FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="default">Cancel</Button>
        <Button bsStyle="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Supported controls render properly', () => {
  const component = mount(
    <Form>
      <Form.FormGroup controlId="text">
        <Form.ControlLabel>Text</Form.ControlLabel>
        <Form.FormControl type="text" />
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="email">
        <Form.ControlLabel>Email</Form.ControlLabel>
        <Form.FormControl type="email" />
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="password">
        <Form.ControlLabel>Password</Form.ControlLabel>
        <Form.FormControl type="password" />
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="file">
        <Form.ControlLabel>File</Form.ControlLabel>
        <Form.FormControl type="file" />
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="checkbox">
        <Form.ControlLabel>Checkbox</Form.ControlLabel>
        <Form.Checkbox>Checkbox</Form.Checkbox>
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="radio">
        <Form.ControlLabel>Radio</Form.ControlLabel>
        <Form.Radio>Radio</Form.Radio>
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="checkboxGroup">
        <Form.ControlLabel>Checkbox Group</Form.ControlLabel>
        <div>
          <Form.Checkbox inline>1</Form.Checkbox>
          <Form.Checkbox inline>2</Form.Checkbox>
          <Form.Checkbox inline>3</Form.Checkbox>
        </div>
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="radioGroup">
        <Form.ControlLabel>Radio Group</Form.ControlLabel>
        <div>
          <Form.Radio name="radioGroup" inline>
            1
          </Form.Radio>
          <Form.Radio name="radioGroup" inline>
            2
          </Form.Radio>
          <Form.Radio name="radioGroup" inline>
            3
          </Form.Radio>
        </div>
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="textarea">
        <Form.ControlLabel>Textarea</Form.ControlLabel>
        <Form.FormControl componentClass="textarea" />
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
      <Form.FormGroup controlId="static">
        <Form.ControlLabel>Static</Form.ControlLabel>
        <Form.FormControl.Static>email@example.com</Form.FormControl.Static>
        <Form.HelpBlock>Help text</Form.HelpBlock>
      </Form.FormGroup>
    </Form>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Input Groups render properly', () => {
  const component = mount(
    <Form>
      <Grid.Row>
        <Grid.Col>
          <Form.FormGroup controlId="control-1">
            <Form.InputGroup>
              <Form.InputGroup.Addon>@</Form.InputGroup.Addon>
              <Form.FormControl type="text" />
            </Form.InputGroup>
          </Form.FormGroup>
          <Form.FormGroup controlId="control-2">
            <Form.InputGroup>
              <Form.FormControl type="text" />
              <Form.InputGroup.Addon>.00</Form.InputGroup.Addon>
            </Form.InputGroup>
          </Form.FormGroup>
          <Form.FormGroup controlId="control-3">
            <Form.InputGroup>
              <Form.InputGroup.Addon>$</Form.InputGroup.Addon>
              <Form.FormControl type="text" />
              <Form.InputGroup.Addon>.00</Form.InputGroup.Addon>
            </Form.InputGroup>
          </Form.FormGroup>
          <Form.FormGroup controlId="control-4">
            <Form.InputGroup>
              <Form.FormControl type="text" />
              <Form.InputGroup.Addon>
                <Icon name="music" />
              </Form.InputGroup.Addon>
            </Form.InputGroup>
          </Form.FormGroup>
          <Form.FormGroup controlId="control-5">
            <Form.InputGroup>
              <Form.InputGroup.Button>
                <Button>Before</Button>
              </Form.InputGroup.Button>
              <Form.FormControl type="text" />
            </Form.InputGroup>
          </Form.FormGroup>
          <Form.FormGroup controlId="control-6">
            <Form.InputGroup>
              <Form.FormControl type="text" />
              <DropdownButton componentClass={Form.InputGroup.Button} id="input-dropdown-addon" title="Action">
                <MenuItem>Item</MenuItem>
              </DropdownButton>
            </Form.InputGroup>
          </Form.FormGroup>
          <Form.FormGroup controlId="control-7">
            <Form.InputGroup>
              <Form.InputGroup.Addon>
                <input type="radio" />
              </Form.InputGroup.Addon>
              <Form.FormControl type="text" />
            </Form.InputGroup>
          </Form.FormGroup>
          <Form.FormGroup controlId="control-8">
            <Form.InputGroup>
              <Form.InputGroup.Addon>
                <input type="checkbox" />
              </Form.InputGroup.Addon>
              <Form.FormControl type="text" />
            </Form.InputGroup>
          </Form.FormGroup>
        </Grid.Col>
      </Grid.Row>
    </Form>
  );

  expect(component.render()).toMatchSnapshot();
});
