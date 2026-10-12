import {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@rh-felt/react-core';
import RhUiAddCircleFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';
import CubeIcon from '@rh-felt/react-icons/dist/esm/icons/cube-icon';
import BookIcon from '@rh-felt/react-icons/dist/esm/icons/book-icon';
import RhUiKeyIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-key-icon';
import RhUiFlagFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-flag-fill-icon';
import RhUiLanguageFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-language-fill-icon';

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
      <DescriptionListTerm icon={<RhUiKeyIcon />}>Labels</DescriptionListTerm>
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
