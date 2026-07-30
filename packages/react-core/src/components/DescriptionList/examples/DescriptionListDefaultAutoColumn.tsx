import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';

export const DescriptionListDefaultAutoColumn: React.FunctionComponent = () => (
  <DescriptionList isAutoColumnWidths columnModifier={{ default: '3Col' }} aria-label="Default auto column width">
    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Namespace</DescriptionListTerm>
      <DescriptionListDescription>
        <a href="#">mary-test</a>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Labels</DescriptionListTerm>
      <DescriptionListDescription>example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Pod selector</DescriptionListTerm>
      <DescriptionListDescription>
        <Button variant="link" isInline icon={<RhUiAddCircleFillIcon />}>
          app=MyApp
        </Button>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm>Annotation</DescriptionListTerm>
      <DescriptionListDescription>2 Annotations</DescriptionListDescription>
    </DescriptionListGroup>
  </DescriptionList>
);
