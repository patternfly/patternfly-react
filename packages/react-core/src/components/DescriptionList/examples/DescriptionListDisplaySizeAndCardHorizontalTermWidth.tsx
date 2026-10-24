import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, Card } from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const DescriptionListDisplaySizeAndCardHorizontalTermWidth: React.FunctionComponent = () => (
  <DescriptionList
    displaySize="lg"
    isHorizontal
    columnModifier={{ lg: '2Col' }}
    termWidth="10ch"
    aria-label="Display size with card, horizontal and modified term width"
  >
    <Card component="div">
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription>
        <a href="#">mary-test</a>
      </DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Labels</DescriptionListTerm>
      <DescriptionListDescription>example</DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Pod selector</DescriptionListTerm>
      <DescriptionListDescription>
        <Button variant="link" isInline icon={<RhUiAddCircleFillIcon />}>
          app=MyApp
        </Button>
      </DescriptionListDescription>
    </Card>
    <Card component="div">
      <DescriptionListTerm>Annotation</DescriptionListTerm>
      <DescriptionListDescription>2 Annotations</DescriptionListDescription>
    </Card>
  </DescriptionList>
);
