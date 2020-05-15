import React from 'react';
import { BackgroundImage, BackgroundImageProps } from '@patternfly/react-core';
/* eslint-disable camelcase */
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
      lg: pfbg_1200,
      sm: pfbg_768,
      sm2x: pfbg_768_2x,
      xs: pfbg_576,
      xs2x: pfbg_576_2x
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <BackgroundImage src={this.myBackgroundProps.src} />;
  }
}
