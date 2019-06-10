import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { css } from '@patternfly/react-styles';
import { ApplicationLauncherPosition } from './applicationLauncherConstants';
import { DropdownArrowContext } from '../Dropdown/dropdownConstants';
import { keyHandler } from '../../helpers/util';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';

export interface ApplicationLauncherMenuProps extends React.HTMLProps<HTMLUListElement> {
   /** Anything which can be rendered as dropdown items */
   children?: React.ReactNode; 
   /** Classess applied to root element of dropdown menu */
   className?: string; 
   /** internal index of the item */
   index?: number; 
   /** Flag to indicate if menu is opened */
   isOpen?: boolean; 
   /** Flag to indicate if menu should be opened on enter */
   openedOnEnter?: boolean; 
   /** Indicates where menu will be alligned horizontally */
   position?: typeof ApplicationLauncherPosition | keyof typeof ApplicationLauncherPosition;
}

export class ApplicationLauncherMenu extends React.Component<ApplicationLauncherMenuProps> {
  refsCollection: any[] = [];
  ref = React.createRef<HTMLDivElement>(); 

  static defaultProps = {
    children: null as React.ReactNode,
    className: '',
    index: null as number,
    isOpen: true,
    openedOnEnter: false,
    position: ApplicationLauncherPosition.left
  };

  childKeyHandler = (index: number, position: any, custom = false) => {
    keyHandler(index, position, this.refsCollection, this.props.children as any[], custom);
  };

  onKeyDown = (event: any) => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.key === KEY_CODES.TAB) {return};
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ARROW_UP) {
      keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP, this.refsCollection, this.props.children as any[]);
    } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
      keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN, this.refsCollection, this.props.children as any[]);
    } else if (event.key === KEY_CODES.ENTER) {
      this.ref.current.click();
    }
  };

  componentDidMount() {
    if (this.props.openedOnEnter) {
      this.refsCollection[0].focus();
    }
  }

  sendRef = (index: number, node: any, isDisabled: boolean) => {
    if (!node.getAttribute) {
      this.refsCollection[index] = ReactDOM.findDOMNode(node); // eslint-disable-line react/no-find-dom-node
    } else if (isDisabled || node.getAttribute('role') === 'separator') {
      this.refsCollection[index] = null;
    } else {
      this.refsCollection[index] = node;
    }
  };

  extendChildren() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child as any, {
        index,
        isAppLauncher: true
      })
    );
  }

  render() {
    const { className, isOpen, position, children, openedOnEnter, ...props } = this.props;

    return (
      <DropdownArrowContext.Provider
        value={{
          keyHandler: this.childKeyHandler,
          sendRef: this.sendRef
        }}
      >
        <ul {...props} className={css(styles.appLauncherMenu, className)} hidden={!isOpen} role="menu">
          {this.extendChildren()}
        </ul>
      </DropdownArrowContext.Provider>
    );
  }
}