---
title: 'Background image'
section: components
cssPrefix: 'pf-c-background-image'
typescript: true
propComponents: ['BackgroundImage']
---

import { BackgroundImage } from '@patternfly/react-core';

## Examples
```js title=Basic isFullscreen
import { BackgroundImage } from '@patternfly/react-core';

class SimpleBackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    /**
     * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
     */
    this.images = {
      'xs': '/assets/images/pfbg_576.jpg',
      'xs2x': '/assets/images/pfbg_576@2x.jpg',
      'sm': '/assets/images/pfbg_768.jpg',
      'sm2x': '/assets/images/pfbg_768@2x.jpg',
      'lg': '/assets/images/pfbg_1200.jpg'
    };
  }
  render() {
    return <BackgroundImage src={this.images} />;
  }
}
```
