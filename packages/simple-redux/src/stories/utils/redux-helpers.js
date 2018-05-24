import { connect } from 'react-redux';
import { ReduxApp } from './ReduxApp.stories';

export const customMiddleware = middlewareStore => next => action => {
  action.payload = action.payload || {};
  action.payload.fromMiddleware = 'I am middleware message';
  next(action);
};

// container compo
const mapStateToProps = state => ({
  clicks: state.clicks
});

const mapDispatchToProps = dispatch => ({
  onClickIncreased: () => {
    dispatch({ type: 'onAddAction' });
  },
  onClickDecreased: () => {
    dispatch({ type: 'onMinusAction' });
  }
});

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
export { AppConnected };
