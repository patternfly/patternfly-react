/* eslint-disable no-throw-literal */
/* eslint-disable no-throw-literal */
const okIcon = 'ok';
const infoIcon = 'info';
const warningIcon = 'warning-triangle-o';
const errorIcon = 'error-circle-o';
const closeIcon = 'close';
const questionSign = 'glyphicon glyphicon-question-sign';

export default type => {
  switch (type) {
    case 'ok':
    case 'notice':
    case 'success':
      return okIcon;
    case 'info':
      return infoIcon;
    case 'warning':
      return warningIcon;
    case 'danger':
    case 'error':
      return errorIcon;
    case 'close':
      return closeIcon;
    case 'question-sign':
      return questionSign;
    default:
      throw { error: `unknown icon type ${type}` };
  }
};
