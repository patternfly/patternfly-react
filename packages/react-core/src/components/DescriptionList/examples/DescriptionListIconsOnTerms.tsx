import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import RhUiAddCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import BookIcon from '@patternfly/react-icons/dist/esm/icons/book-icon';
import KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';
import RhUiFlagFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-flag-fill-icon';
import RhUiLanguageFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-language-fill-icon';

export const DescriptionListIconsOnTerms: React.FunctionComponent = () => (
  <DescriptionList aria-label="With icons examples">
    <DescriptionListGroup>
      <DescriptionListTerm icon={<CubeIcon />}>Name</DescriptionListTerm>
      <DescriptionListDescription>Example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm icon={<BookIcon />}>Namespace</DescriptionListTerm>
      <DescriptionListDescription>
        <a href="#">mary-test</a>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm icon={<KeyIcon />}>Labels</DescriptionListTerm>
      <DescriptionListDescription>example</DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm icon={<RhUiLanguageFillIcon />}>Pod selector</DescriptionListTerm>
      <DescriptionListDescription>
        <Button variant="link" isInline icon={<RhUiAddCircleFillIcon />}>
          app=MyApp
        </Button>
      </DescriptionListDescription>
    </DescriptionListGroup>
    <DescriptionListGroup>
      <DescriptionListTerm icon={<RhUiFlagFillIcon />}>Annotation</DescriptionListTerm>
      <DescriptionListDescription>2 Annotations</DescriptionListDescription>
    </DescriptionListGroup>
  </DescriptionList>
);
