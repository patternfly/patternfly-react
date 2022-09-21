import React from 'react';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';

export const TextBody: React.FunctionComponent = () => (
  <TextContent>
    <Text component={TextVariants.p}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
      nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
      erat vel, interdum mattis neque. Sub works as well!
    </Text>
    <Text component={TextVariants.p}>
      Quisque ante lacus, malesuada ac auctor vitae, congue{' '}
      <Text component={TextVariants.a} href="#">
        non ante
      </Text>
      . Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
    </Text>
    <Text component={TextVariants.blockquote}>
      Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet
      turpis.
    </Text>
    <Text component={TextVariants.small}>Sometimes you need small text to display things like date created</Text>
  </TextContent>
);
