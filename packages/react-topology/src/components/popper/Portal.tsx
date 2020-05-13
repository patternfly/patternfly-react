import * as React from 'react';
import * as ReactDOM from 'react-dom';

type GetContainer = Element | null | undefined | (() => Element);

interface PortalProps {
  container?: GetContainer;
}

const getContainer = (container: GetContainer): Element | null | undefined =>
  typeof container === 'function' ? container() : container;

const Portal: React.FC<PortalProps> = ({ children, container }) => {
  const [containerNode, setContainerNode] = React.useState<Element>();

  React.useLayoutEffect(() => {
    setContainerNode(getContainer(container) || document.body);
  }, [container]);

  return containerNode ? ReactDOM.createPortal(children, containerNode) : null;
};

export default Portal;
