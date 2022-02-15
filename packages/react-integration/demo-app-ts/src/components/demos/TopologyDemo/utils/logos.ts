import jenkinsImg from '@patternfly/react-integration/demo-app-ts/src/assets/images/logos/jenkins.svg';
import mongodbImg from '@patternfly/react-integration/demo-app-ts/src/assets/images/logos/mongodb.svg';
import nodejsImg from '@patternfly/react-integration/demo-app-ts/src/assets/images/logos/nodejs.svg';
import openjdkImg from '@patternfly/react-integration/demo-app-ts/src/assets/images/logos/openjdk.svg';

export const logos = new Map<string, any>()
  .set('icon-jenkins', jenkinsImg)
  .set('icon-mongodb', mongodbImg)
  .set('icon-nodejs', nodejsImg)
  .set('icon-openjdk', openjdkImg)
  .set('icon-java', openjdkImg);
