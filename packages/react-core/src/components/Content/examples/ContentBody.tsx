import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentBody: React.FunctionComponent = () => (
  <>
    <Content component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
      nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
      erat vel, interdum mattis neque. Sub works as well!
    </Content>
    <Content component="p">
      Quisque ante lacus, malesuada ac auctor vitae, congue{' '}
      <Content component="a" href="#">
        non ante
      </Content>
      . Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
    </Content>
    <Content component="blockquote">
      Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet
      turpis.
    </Content>
    <Content component="small">
      Sometimes you need small text to display things like date created - but better use Timestamp component for that.
    </Content>
  </>
);