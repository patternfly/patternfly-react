import figma from '@figma/code-connect';
import { DataListCell, DataListItemCells } from '@patternfly/react-core';

// TODO: FIGMA: Either name layers uniquely or create a dataListCell component to house
// Documentation for DataList can be found at https://www.patternfly.org/components/data-list

figma.connect(
  DataListCell,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6596-33934',
  {
    props: {
      showDescriptionText: figma.boolean('Show description text'),

      // enum
      isIcon: figma.enum('Type', {
        'Filled - Plain text': true
      }),
      isFilled: figma.enum('Type', {
        'Filled - Plain text': true,
        'Filled - Link text': true
      }),

      children: figma.children('*'),
      iconContent: figma.children('IconWrapper'),
      primaryContent: figma.children('My application'),
      secondaryContent: figma.textContent('Description text')
    },
    example: (props) => (
      <DataListItemCells
        rowid="<row-id>"
        dataListCells={[
          <DataListCell isIcon={true} key="icon-content">
            {props.iconContent}
          </DataListCell>,
          <DataListCell key="primary-content">{props.primaryContent}</DataListCell>,
          <DataListCell key="secondary-content">{props.secondaryContent}</DataListCell>
        ]}
      />
    )
  }
);
