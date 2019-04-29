import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, color } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import {
  storybookPackageName,
  DOCUMENTATION_URL,
  STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';
import { ClassificationBanner } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/ClassificationBanner`,
  module
);

stories.addDecorator(
  defaultTemplate({
    title: 'Classification Banner',
    documentationLink: `${
      DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
    }classification-banner/`
  })
);

stories.addDecorator(withKnobs);

stories.add(
  'ClassificationBanner',
  withInfo({
    source: true,
    propTables: [ClassificationBanner]
  })(() => (<ClassificationBannerStoryWrapper/>))
);

class ClassificationBannerStoryWrapper extends React.Component{
  constructor(props){
    super(props)
    this.state={
      closed: false,
      bannerColor: ''
    }
  }

  onResetVisibility = ()=>{
    this.setState({
      closed: false
    })
  }

  onResetBannerColor=()=>{
    this.setState({
      bannerColor: ''
    })
  }

  render(){
    const bottomBanner= boolean('Show Bottom Banner',true);
    const closeButton= boolean('Show Close Button',false);
    const classificationLevel = select('Classification Level', { '0': 'Unclassified', '1': 'Classified', '2': 'Proprietary Level 1', '3':'Proprietary Level 2' , '999':'None'}, '1');
    const hostName = text('Host Name','localhost');
    const hostNamePosition = select('Host Name Position',{'left':'Left','right':'Right'},'left');
    const userName = text('User Name','John Smith');
    const userNamePosition = select('User Name Position',{'left':'Left','right':'Right'},'right');
    const bannerColor = color('Banner Color','');

    return(
      <ClassificationBanner 
      bottomBanner={bottomBanner} 
      classificationLevel={classificationLevel} 
      closeButton={closeButton} 
      hostName={hostName} userName={userName}
      closed={this.state.closed} 
      userNamePosition={userNamePosition} hostNamePosition={hostNamePosition}
      bannerColor={bannerColor}
      >
      <br/>
        <p>
        This is the main body of a web page.</p>
        <p>
        Scroll down to see the bottom banner.</p>
      </ClassificationBanner>
    )

  }
}


