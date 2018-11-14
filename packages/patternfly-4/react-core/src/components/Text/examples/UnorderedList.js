import React from 'react';
import { TextContent, TextList, TextListItem } from '@patternfly/react-core';

class UnorderedList extends React.Component {
  render() {
    return (
      <TextContent>
        <TextList>
          <TextListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</TextListItem>
          <TextListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</TextListItem>
          <TextListItem>
            Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
            <TextList>
              <TextListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</TextListItem>
              <TextListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</TextListItem>
            </TextList>
          </TextListItem>
          <TextListItem>Ut non enim metus.</TextListItem>
        </TextList>
      </TextContent>
    );
  }
}

export default UnorderedList;
