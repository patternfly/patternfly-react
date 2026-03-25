import { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Flex,
  FlexItem,
  Icon,
  Tab,
  TabContent,
  Tabs,
  TabTitleText,
  Title
} from '@patternfly/react-core';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';

const descriptionListData = [
  {
    status: 'Running',
    resourceName: 'Resource name that is long and can wrap',
    detail: '121 Systems',
    icon: (
      <Icon status="success">
        <RhUiCheckCircleFillIcon />
      </Icon>
    )
  },
  {
    status: 'Failed',
    resourceName: 'Resource name that is long and can wrap',
    detail: '123 Systems',
    icon: (
      <Icon status="danger">
        <RhUiErrorFillIcon />
      </Icon>
    )
  },
  {
    status: 'Running',
    resourceName: 'Resource name that is long and can wrap',
    detail: '122 Systems',
    icon: (
      <Icon status="success">
        <RhUiCheckCircleFillIcon />
      </Icon>
    )
  },
  {
    status: 'Failed',
    resourceName: 'Resource name that is long and can wrap',
    detail: '124 Systems',
    icon: (
      <Icon status="danger">
        <RhUiErrorFillIcon />
      </Icon>
    )
  }
];

export const CardStatusTabbed: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState(0);
  const handleTabClick = (_e: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: string | number) => {
    setActiveTabKey(Number(tabIndex));
  };

  const tabContent = (tabIndex: number) => (
    <DescriptionList isHorizontal columnModifier={{ lg: '2Col' }} aria-label={`Object ${tabIndex + 1} status`}>
      {descriptionListData.map(({ status, resourceName, detail, icon }, index) => (
        <DescriptionListGroup key={index}>
          <DescriptionListTerm>
            <Flex>
              <FlexItem>{icon}</FlexItem>
              <FlexItem>
                <Title headingLevel="h4" size="md">
                  {status}
                </Title>
              </FlexItem>
            </Flex>
          </DescriptionListTerm>
          <DescriptionListDescription>
            <a href="#">{resourceName}</a>
            <div>{detail}</div>
          </DescriptionListDescription>
        </DescriptionListGroup>
      ))}
    </DescriptionList>
  );

  return (
    <>
      <Card>
        <CardHeader>
          <Title headingLevel="h4" size="lg">
            Status
          </Title>
        </CardHeader>
        <CardBody>
          <Tabs isFilled id="status-tabs" activeKey={activeTabKey} onSelect={handleTabClick}>
            {[1, 2, 3].map((tab, tabIndex) => (
              <Tab
                key={tabIndex}
                eventKey={tabIndex}
                title={<TabTitleText>{`Object ${tabIndex + 1}`}</TabTitleText>}
                tabContentId={`tabContent${tabIndex}`}
              />
            ))}
          </Tabs>
        </CardBody>
        <CardBody>
          {[1, 2, 3].map((tab, tabIndex) => (
            <TabContent
              key={tabIndex}
              eventKey={tabIndex}
              id={`tabContent${tabIndex}`}
              activeKey={activeTabKey}
              hidden={tabIndex !== activeTabKey}
            >
              {tabContent(tabIndex)}
            </TabContent>
          ))}
        </CardBody>
      </Card>
    </>
  );
};
