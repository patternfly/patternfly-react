import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentBody: React.FunctionComponent = () => (
  <>
    <Content component={ContentVariants.p}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
      nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
      erat vel, interdum mattis neque. Sub works as well!
    </Content>
    <Content component={ContentVariants.p}>
      Quisque ante lacus, malesuada ac auctor vitae, congue{' '}
      <Content component={ContentVariants.a} href="#">
        non ante
      </Content>
      . Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
    </Content>
    <Content component={ContentVariants.blockquote}>
      Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet
      turpis.
    </Content>
    <Content component={ContentVariants.small}>
      Sometimes you need small text to display things like date created
    </Content>
  </>
);
