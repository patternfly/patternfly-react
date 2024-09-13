import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentEditorial: React.FunctionComponent = () => (
  <>
    <Content component={ContentVariants.h1} isEditorial>
      Example of editorial content via components
    </Content>
    <Content component={ContentVariants.p} isEditorial>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
      nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
      erat vel, interdum mattis neque. Sub works as well!
    </Content>
    <br />
    <Content isEditorial>
      <h1>Example of editorial content via wrapper</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
        nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
        erat vel, interdum mattis neque. Sub works as well!
      </p>
    </Content>
  </>
);
