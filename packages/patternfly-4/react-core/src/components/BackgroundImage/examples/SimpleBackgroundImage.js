import React from 'react';
import { BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';

/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */
const images = {
  [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
  [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
  [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
  [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
  [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
  [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
};

class SimpleBackgroundImage extends React.Component {
  render() {
    return <BackgroundImage src={images} />;
  }
}

export default SimpleBackgroundImage;
