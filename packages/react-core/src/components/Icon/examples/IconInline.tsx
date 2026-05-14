import { Fragment } from 'react';
import { Icon, Content } from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const IconInline: React.FunctionComponent = () => (
  <Fragment>
    <Content>
      <h1>
        Heading
        <Icon isInline>
          <RhUiAddCircleFillIcon />
        </Icon>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.</p>
      <h2>
        Second level
        <Icon isInline>
          <RhUiAddCircleFillIcon />
        </Icon>
      </h2>
      <p>
        <Icon isInline>
          <RhUiAddCircleFillIcon />
        </Icon>
        Curabitur accumsan turpis pharetra
        <strong>
          augue tincidunt
          <Icon isInline>
            <RhUiAddCircleFillIcon />
          </Icon>
        </strong>
        blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
        venenatis. Suspendisse potenti.
      </p>
      <small>
        Sometimes you need small text
        <Icon isInline>
          <RhUiAddCircleFillIcon />
        </Icon>
      </small>
      Inline with size specified:
      <Icon size="sm" isInline>
        <RhUiAddCircleFillIcon />
      </Icon>
      small,
      <Icon size="md" isInline>
        <RhUiAddCircleFillIcon />
      </Icon>
      medium,
      <Icon size="lg" isInline>
        <RhUiAddCircleFillIcon />
      </Icon>
      large,
      <Icon size="xl" isInline>
        <RhUiAddCircleFillIcon />
      </Icon>
      extra large
    </Content>
  </Fragment>
);
