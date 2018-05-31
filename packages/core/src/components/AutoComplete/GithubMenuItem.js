import React from 'react';
import PropTypes from 'prop-types';

const GithubMenuItem = props => (
  <div key={props.option.id}>
    <img
      alt="avatar"
      height="20px"
      src={props.option.avatar_url}
      style={{ borderRadius: '10px', margin: '5px' }}
    />
    {props.option.login}
  </div>
);

GithubMenuItem.propTypes = {
  option: PropTypes.object.isRequired
};

export default GithubMenuItem;
