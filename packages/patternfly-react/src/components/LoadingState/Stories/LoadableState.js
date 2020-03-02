import React from 'react';
import PropTypes from 'prop-types';
import LoadingState from '../LoadingState';
import { Button } from '../../Button';

class LoadableState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Pre-Loaded state',
      loading: false
    };
  }
  render() {
    const { loading, message } = this.state;
    const { timeout, delay } = this.props;
    return (
      <div>
        <div>
          <Button
            bsStyle="primary"
            onClick={() => {
              this.setState({ loading: true });
              const timer = setTimeout(() => {
                this.setState({ loading: false, message: 'New Loaded State' });
                clearTimeout(timer);
              }, timeout);
            }}
          >
            Fetch data
          </Button>
        </div>
        <div>
          <LoadingState loading={loading} timeout={delay}>
            {message}
          </LoadingState>
        </div>
      </div>
    );
  }
}

LoadableState.propTypes = {
  timeout: PropTypes.number,
  delay: PropTypes.number
};

LoadableState.defaultProps = {
  timeout: 3000,
  delay: 1000
};

export const LoadableStateSource = `
  import React from 'react';
  import { number } from '@storybook/addon-knobs';
  import LoadingState from '../LoadingState';
  import { Button } from '../../Button';

  class LoadableState extends React.Component {
      state = {
          message: 'Pre-Loaded state',
          loading: false
      };
      render() {
          const { loading, message } = this.state;
          const timeout = number('server response time', 3000);
          const delay = number('spinner delay', 1000);
          return (
              <div>
                  <div>
                      <Button
                          bsStyle="primary"
                          onClick={() => {
                              this.setState({ loading: true });
                              const timer = setTimeout(() => {
                                  this.setState({ loading: false, message: 'New Loaded State' });
                                  clearTimeout(timer);
                              }, timeout);
                          }}
                      >
                          Fetch data
                  </Button>
                  </div>
                  <div>
                      <LoadingState loading={loading} timeout={delay}>
                          {message}
                      </LoadingState>
                  </div>
              </div>
          );
      }
  }
`;

export default LoadableState;
