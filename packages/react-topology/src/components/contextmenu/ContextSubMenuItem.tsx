import * as React from 'react';
import { DropdownMenu, DropdownItem } from '@patternfly/react-core';
// FIXME fully qualified due to the effect of long build times on storybook
import Popper from '../popper/Popper';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';

interface ContextSubMenuItemProps {
  label: React.ReactNode;
  children: React.ReactNode[];
}

const ContextSubMenuItem: React.FC<ContextSubMenuItemProps> = ({ label, children, ...other }) => {
  const nodeRef = React.useRef<HTMLButtonElement>(null);
  const subMenuRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  const referenceCb = React.useCallback(() => nodeRef.current || { x: 0, y: 0 }, []);

  return (
    <>
      <DropdownItem
        {...other}
        className="pf-topology-context-sub-menu"
        component={
          <button
            ref={nodeRef}
            type="button"
            // prevent this DropdownItem from executing like a normal action item
            onClick={e => e.stopPropagation()}
            // mouse enter will open the sub menu
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={e => {
              // if the mouse leaves this item, close the sub menu only if the mouse did not enter the sub menu itself
              if (!subMenuRef.current || !subMenuRef.current.contains(e.relatedTarget as Node)) {
                setOpen(false);
              }
            }}
            onKeyDown={e => {
              // open the sub menu on enter or right arrow
              if (e.keyCode === 39 || e.keyCode === 13) {
                setOpen(true);
                e.stopPropagation();
              }
            }}
          >
            {label}
            <AngleRightIcon className="pf-topology-context-sub-menu__arrow" />
          </button>
        }
      />
      <Popper
        open={open}
        placement="right-start"
        closeOnEsc
        closeOnOutsideClick
        onRequestClose={e => {
          // only close the sub menu if clicking anywhere outside the menu item that owns the sub menu
          if (!e || !nodeRef.current || !nodeRef.current.contains(e.target as Node)) {
            setOpen(false);
          }
        }}
        reference={referenceCb}
        // use the parent node to capture the li
        container={nodeRef.current ? nodeRef.current.parentElement : nodeRef.current}
        returnFocus
      >
        <div
          ref={subMenuRef}
          role="presentation"
          className="pf-c-dropdown pf-m-expanded"
          onMouseLeave={e => {
            // only close the sub menu if the mouse does not enter the item
            if (!nodeRef.current || !nodeRef.current.contains(e.relatedTarget as Node)) {
              setOpen(false);
            }
          }}
          onKeyDown={e => {
            // close the sub menu on left arrow
            if (e.keyCode === 37) {
              setOpen(false);
              e.stopPropagation();
            }
          }}
        >
          <DropdownMenu className="pf-c-dropdown__menu" autoFocus>
            {children}
          </DropdownMenu>
        </div>
      </Popper>
    </>
  );
};

export default ContextSubMenuItem;
