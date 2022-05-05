import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useIsomorphicLayoutEffect } from '@patternfly/react-core';

type GetContainer = Element | null | undefined | (() => Element);

interface PortalProps {
  children?: React.ReactNode;
  container?: GetContainer;
}

const getContainer = (container: GetContainer): Element | null | undefined =>
  typeof container === 'function' ? container() : container;

const Portal: React.FunctionComponent<PortalProps> = ({ children, container }) => {
  const [containerNode, setContainerNode] = React.useState<Element>();

  useIsomorphicLayoutEffect(() => {
    setContainerNode(getContainer(container) || document.body);
  }, [container]);

  return containerNode ? ReactDOM.createPortal(children, containerNode) : null;
};

export default Portal;
