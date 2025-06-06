import { useState } from 'react';
import { Button, Flex } from '@patternfly/react-core';

export const ButtonHamburger: React.FunctionComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hamburgerVariant, setHamburgerVariant] = useState<'expand' | 'collapse'>('expand');

  const handleClick = () => {
    setHamburgerVariant((prevVariant) => (prevVariant === 'expand' ? 'collapse' : 'expand'));
    setIsExpanded(!isExpanded);
  };

  const onHoverFocus = () => {
    setIsHovered(true);
  };
  const onLeaveBlur = () => {
    setIsHovered(false);
  };

  return (
    <Flex>
      <Button isExpanded={false} aria-label="Hamburger example default icon" isHamburger />
      <Button isExpanded={false} aria-label="Hamburger example expand icon" isHamburger hamburgerVariant="expand" />
      <Button isExpanded={true} aria-label="Hamburger example collapse icon" isHamburger hamburgerVariant="collapse" />
      <Button
        isHamburger
        aria-label="Hamburger example dynamic icon"
        onClick={handleClick}
        isExpanded={isExpanded}
        onMouseOver={onHoverFocus}
        onMouseLeave={onLeaveBlur}
        onFocus={onHoverFocus}
        onBlur={onLeaveBlur}
        hamburgerVariant={isHovered ? hamburgerVariant : undefined}
      />
    </Flex>
  );
};
