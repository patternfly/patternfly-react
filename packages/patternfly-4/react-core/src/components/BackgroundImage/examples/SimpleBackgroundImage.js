import React from 'react';
import { BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';

/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */
const images = {
  [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
  [BackgroundImageSrc.md]: '/assets/images/pfbg_992.jpg',
  [BackgroundImageSrc.md2x]: '/assets/images/pfbg_992@2x.jpg',
  [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
  [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
  [BackgroundImageSrc.xl]: '/assets/images/pfbg_2000.jpg',
  [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
  [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
  [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
};

class SimpleBackgroundImage extends React.Component {
  render() {
    return <BackgroundImage src={images} />;
  }
};

export default SimpleBackgroundImage;
