/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from '../components/mdx-renderer';

const MdxFullscreenTemplate = ({ data }) => <MDXRenderer>{data.mdx.code.body}</MDXRenderer>;

MdxFullscreenTemplate.propTypes = {
  data: PropTypes.any.isRequired
};

export const pageQuery = graphql`
  query GetFullscreenComponent($fileAbsolutePath: String!) {
    mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      code {
        body
      }
    }
  }
`;

export default MdxFullscreenTemplate;
