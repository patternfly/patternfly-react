import React from 'react';
import { BackgroundImage, BackgroundImageProps, BackgroundImageSrc } from '@patternfly/react-core';
const pfbg_1200 = require('../LoginPageDemo/images/pfbg_1200.jpg');
const pfbg_768 = require('../LoginPageDemo/images/pfbg_768.jpg');
const pfbg_768_2x = require('../LoginPageDemo/images/pfbg_768@2x.jpg');
const pfbg_576 = require('../LoginPageDemo/images/pfbg_576.jpg');
const pfbg_576_2x = require('../LoginPageDemo/images/pfbg_576@2x.jpg');

export class BackgroundImageDemo extends React.Component {
  myBackgroundProps: BackgroundImageProps = {
    /**
     * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
     */
    src: {
      [BackgroundImageSrc.lg]: pfbg_1200,
      [BackgroundImageSrc.sm]: pfbg_768,
      [BackgroundImageSrc.sm2x]: pfbg_768_2x,
      [BackgroundImageSrc.xs]: pfbg_576,
      [BackgroundImageSrc.xs2x]: pfbg_576_2x,
      [BackgroundImageSrc.filter]: ''
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <BackgroundImage src={this.myBackgroundProps.src} />;
  }
}
