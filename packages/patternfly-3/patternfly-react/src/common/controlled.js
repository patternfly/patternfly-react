import React from 'react';
import PropTypes from 'prop-types';
import { nullValues, selectKeys, filterKeys } from './helpers';

/*
  controlled(stateTypes, defaults)(WrappedComponent)

  *** NOTE / BEWARE! *******************************************************************************
  This is already deprecated, even as new as it is, because we now have getDerivedStateFromProps!
  It remains here for now because of its additional "persist" feature, which we should factor out.
  **************************************************************************************************

  This Higher Order Component provides the controlled component pattern on a prop-by-prop basis.
  It's a nice way for components to implement internal state so they "just work" out of the box,
  but also give users the option of lifting some or all of that state up into their application.

  controlled() takes arguments as an object with three options:
   * types - an object of PropTypes for the state that will be contained here
   * defaults - an optional object with default values for stateTypes
   * persist - an optional array of names from stateTypes which will be persisted to sessionStorage
  
  The WrappedComponent will be rendered with special props:
   * setControlledState - a reference to this state wrapper's this.setState.
   * Props for all the stateTypes, from this.props if present or from this.state otherwise.
   * All other props passed to the controlled component HoC.
  
  The idea is that the values in stateTypes could be stored in state, or passed in via props.
  The WrappedComponent doesn't have to care which is being used, and can manage the state
  contained here. When present, props are used instead. If you provide these special props,
  be sure to also provide corresponding callbacks/handlers to keep them updated.
  
  If you are using the persist option, you can optionally pass a sessionKey prop to the component
  to ensure multiple instances of the component store their data separately. If you don't pass
  a sessionKey, a stringified list of the persisted keys will be used (not unique to the instance).
*/
const controlled = ({ types, defaults = {}, persist }) => WrappedComponent => {
  class ControlledComponent extends React.Component {
    state = { ...nullValues(types), ...defaults };

    componentDidMount() {
      this.loadPersistent();
      window && window.addEventListener && window.addEventListener('beforeunload', this.savePersistent);
    }

    componentWillUnmount() {
      this.savePersistent();
      window && window.removeEventListener && window.removeEventListener('beforeunload', this.savePersistent);
    }

    setControlledState = updater => {
      this.setState(updater);
    };

    loadPersistent = () => {
      if (persist && persist.length > 0) {
        const fromPersisted = window && window.sessionStorage && window.sessionStorage.getItem(this.sessionKey());
        fromPersisted && this.setState(JSON.parse(fromPersisted));
      }
    };

    savePersistent = () => {
      if (persist && persist.length > 0) {
        const toPersist = selectKeys(this.state, persist);
        window && window.sessionStorage && window.sessionStorage.setItem(this.sessionKey(), JSON.stringify(toPersist));
      }
    };

    sessionKey = () => this.props.sessionKey || JSON.stringify(persist);

    render() {
      const controlledStateProps = filterKeys(this.props, key => types.hasOwnProperty(key) && this.props[key] !== null);
      const otherProps = filterKeys(this.props, key => !types.hasOwnProperty(key));
      return (
        <WrappedComponent
          setControlledState={this.setControlledState}
          {...this.state}
          {...controlledStateProps}
          {...otherProps}
        />
      );
    }
  }

  ControlledComponent.displayName = WrappedComponent.displayName;
  ControlledComponent.propTypes = {
    ...WrappedComponent.propTypes,
    ...types,
    sessionKey: PropTypes.string
  };

  ControlledComponent.defaultProps = {
    ...WrappedComponent.defaultProps
  };

  return ControlledComponent; // TODO use recompose withState or withStateHandlers here instead of component state above
};

export default controlled;
