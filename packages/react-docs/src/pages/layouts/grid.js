import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@patternfly/react-core';
import { StyleSheet, css } from '@patternfly/react-styles';
import {
  global_BorderColor as borderColor,
  global_BorderWidth_md as borderWidth,
  global_spacer_sm as padding
} from '@patternfly/react-tokens';
import Example from '../../components/example';
import GridPlayground from '../../components/gridPlayground';

const styles = StyleSheet.create({
  item: {
    minHeight: 75,
    padding: padding.var,
    border: `${borderWidth.var} dashed ${borderColor.var}`
  }
});

const StyledGridItem = props => <GridItem {...props} className={css(styles.item)} />;

const propTypes = {
  data: PropTypes.any.isRequired
};

const GridDocs = ({ data }) => {
  const galleryItems = (
    <React.Fragment>
      <StyledGridItem span={8}>span = 8</StyledGridItem>
      <StyledGridItem span={4} rowSpan={2}>
        span = 4, rowSpan = 2
      </StyledGridItem>
      <StyledGridItem span={2} rowSpan={3}>
        span = 2, rowSpan = 3
      </StyledGridItem>
      <StyledGridItem span={2}>span = 2</StyledGridItem>
      <StyledGridItem span={4}>span = 4</StyledGridItem>
      <StyledGridItem span={2}>span = 2</StyledGridItem>
      <StyledGridItem span={2}>span = 2</StyledGridItem>
      <StyledGridItem span={2}>span = 2</StyledGridItem>
      <StyledGridItem span={4}>span = 4</StyledGridItem>
      <StyledGridItem span={2}>span = 2</StyledGridItem>
      <StyledGridItem span={4}>span = 4</StyledGridItem>
      <StyledGridItem span={4}>span = 4</StyledGridItem>
    </React.Fragment>
  );

  const GalleryItemsGridLevelColumns = (
    <React.Fragment>
      <StyledGridItem span={8}>span = 8</StyledGridItem>
      <StyledGridItem span={3} rowSpan={2}>
        span = 3 rowSpan= 2
      </StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
      <StyledGridItem>span = 4</StyledGridItem>
    </React.Fragment>
  );

  return (
    <ComponentDocs data={data}>
      <Example title="Simple Grid">
        <Grid>{galleryItems}</Grid>
      </Example>
      <Example title="Grid with gutters">
        <Grid gutter="md">{galleryItems}</Grid>
      </Example>
      <Example title="Grid Playground">
        <GridPlayground />
      </Example>
      <Example title="Grid with overides">
        <Grid span={4}> {GalleryItemsGridLevelColumns} </Grid>
      </Example>
    </ComponentDocs>
  );
};

GridDocs.propTypes = propTypes;

export const query = graphql`
  query GridDocsQuery {
    componentMetadata(displayName: { eq: "Grid" }) {
      ...ComponentDocs
    }
  }
`;

export default GridDocs;
