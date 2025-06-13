import { Button, Flex } from '@patternfly/react-core';

export const ButtonHamburger: React.FunctionComponent = () => (
  <Flex>
    <Button variant="plain" isExpanded={false} aria-label="Hamburger example" isHamburger />
    <Button variant="plain" isExpanded={false} aria-label="Hamburger example" isHamburger hamburgerVariant="expand" />
    <Button variant="plain" isExpanded={true} aria-label="Hamburger example" isHamburger hamburgerVariant="collapse" />
  </Flex>
);
