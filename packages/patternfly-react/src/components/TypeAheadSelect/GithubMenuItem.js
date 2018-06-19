import React from 'react';
import PropTypes from 'prop-types';
import { Highlighter } from 'react-bootstrap-typeahead';

const GithubMenuItem = props => (
  <div key={props.option.id}>
    <img
      alt="avatar"
      height="20px"
      src={props.option.avatar_url}
      style={{ borderRadius: '10px', margin: '5px' }}
    />
    <Highlighter search={props.text}>{props.option.login}</Highlighter>
  </div>
);

GithubMenuItem.propTypes = {
  option: PropTypes.object.isRequired,
  text: PropTypes.string
};

GithubMenuItem.defaultProps = {
  text: null
};

export default GithubMenuItem;
