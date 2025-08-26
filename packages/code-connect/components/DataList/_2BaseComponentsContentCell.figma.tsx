import figma from '@figma/code-connect';
import { Icon, DataListCell, DataListItem, DataListItemCells, DataListItemRow } from '@patternfly/react-core';

// TODO: DESIGN: Either name layers uniquely or create a dataListCell component to house
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

      primaryContent: 'Main content',
      secondaryContent: 'Second content block'
    },
    example: (props) => (
      <DataListItem aria-labelledby="item1">
        <DataListItemRow>
          <DataListItemCells
            dataListCells={[
              <DataListCell isIcon={true} key="icon-content">
                <Icon name="info" />
              </DataListCell>,
              <DataListCell key="primary-content">
                <span id="item1">{props.primaryContent}</span>
              </DataListCell>,
              <DataListCell key="secondary-content">{props.secondaryContent}</DataListCell>
            ]}
          />
        </DataListItemRow>
      </DataListItem>
    )
  }
);
