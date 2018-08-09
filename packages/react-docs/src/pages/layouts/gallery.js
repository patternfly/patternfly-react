import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import { StyleSheet, css } from '@patternfly/react-styles';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@patternfly/react-tokens';
import Example from '../../components/example';

const styles = StyleSheet.create({
  item: {
    height: 100,
    border: `${borderWidth.var} dashed ${borderColor.var}`
  }
});

const StyledGalleryItem = props => <GalleryItem {...props} className={css(styles.item)} />;

const propTypes = {
  data: PropTypes.any.isRequired
};

const GalleryDocs = ({ data }) => {
  const galleryItems = (
    <React.Fragment>
      <StyledGalleryItem>Gallery Item</StyledGalleryItem>
      <StyledGalleryItem>Gallery Item</StyledGalleryItem>
      <StyledGalleryItem>Gallery Item</StyledGalleryItem>
      <StyledGalleryItem>Gallery Item</StyledGalleryItem>
      <StyledGalleryItem>Gallery Item</StyledGalleryItem>
      <StyledGalleryItem>Gallery Item</StyledGalleryItem>
    </React.Fragment>
  );

  return (
    <ComponentDocs data={data}>
      <Example title="Simple Gallery">
        <Gallery>{galleryItems}</Gallery>
      </Example>
      <Example title="Gallery with gutters">
        <Gallery gutter="md">{galleryItems}</Gallery>
      </Example>
    </ComponentDocs>
  );
};

GalleryDocs.propTypes = propTypes;

export const query = graphql`
  query GalleryDocsQuery {
    componentMetadata(displayName: { eq: "Gallery" }) {
      ...ComponentDocs
    }
  }
`;

export default GalleryDocs;
