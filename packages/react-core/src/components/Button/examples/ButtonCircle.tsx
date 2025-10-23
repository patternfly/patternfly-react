import { Button, Flex } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

interface LoadingPropsType {
  spinnerAriaValueText: string;
  spinnerAriaLabelledBy?: string;
  spinnerAriaLabel?: string;
  isLoading: boolean;
}

export const ButtonCircle: React.FunctionComponent = () => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const uploadingProps = {} as LoadingPropsType;
  uploadingProps.spinnerAriaValueText = 'Loading circle variant example';
  uploadingProps.spinnerAriaLabel = 'Uploading circle variant example data';
  uploadingProps.isLoading = isUploading;

  return (
    <Flex columnGap={{ default: 'columnGapSm' }}>
      <Button isCircle icon={<PlusCircleIcon />} aria-label="Add primary circle variant example" />
      <Button
        variant="secondary"
        isCircle
        icon={<PlusCircleIcon />}
        aria-label="Add secondary circle variant example"
      />
      <Button variant="tertiary" isCircle icon={<PlusCircleIcon />} aria-label="Add tertiary circle variant example" />
      <Button variant="danger" isCircle icon={<PlusCircleIcon />} aria-label="Add danger circle variant example" />
      <Button variant="warning" isCircle icon={<PlusCircleIcon />} aria-label="Add warning circle variant example" />
      <Button variant="link" isCircle icon={<PlusCircleIcon />} aria-label="Add link circle variant example" />
      <Button variant="control" isCircle icon={<CopyIcon />} aria-label="Copy control circle variant example" />
      <Button variant="plain" isCircle icon={<TimesIcon />} aria-label="Remove plain circle variant example" />
      <Button variant="stateful" isCircle icon={<BellIcon />} aria-label="Stateful unread circle variant example" />
      <Button
        variant="stateful"
        state="read"
        isCircle
        icon={<BellIcon />}
        aria-label="Stateful read circle variant example"
      />
      <Button
        variant="stateful"
        state="attention"
        isCircle
        icon={<BellIcon />}
        aria-label="Stateful attention circle variant example"
      />
      <Button
        variant="plain"
        {...(!isUploading && { 'aria-label': 'Upload circle variant example' })}
        onClick={() => setIsUploading(!isUploading)}
        icon={<UploadIcon />}
        {...uploadingProps}
      />
    </Flex>
  );
};
