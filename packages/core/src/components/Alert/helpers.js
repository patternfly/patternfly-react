import {
  ALERT_TYPE_DANGER,
  ALERT_TYPE_ERROR,
  ALERT_TYPE_WARNING,
  ALERT_TYPE_SUCCESS,
  ALERT_TYPE_INFO
} from './AlertConstants';

export const warnIfDeprecatedType = type => {
  if (type === ALERT_TYPE_DANGER) {
    // eslint-disable-next-line no-console
    console.warn(`
      Warning: Deprecated Alert.type='${ALERT_TYPE_DANGER}'.
      Please migrate to Alert.type='${ALERT_TYPE_ERROR}'
    `);
  }
};

export const getIconName = type => {
  switch (type) {
    case ALERT_TYPE_DANGER:
    case ALERT_TYPE_ERROR:
      return 'error-circle-o';
    case ALERT_TYPE_WARNING:
      return 'warning-triangle-o';
    case ALERT_TYPE_SUCCESS:
      return 'ok';
    case ALERT_TYPE_INFO:
      return 'info';
    default:
      throw new Error(`Unsupported alert type=${type}`);
  }
};

export const getClassName = type => {
  switch (type) {
    case ALERT_TYPE_DANGER:
    case ALERT_TYPE_ERROR:
      return 'alert-danger';
    case ALERT_TYPE_WARNING:
      return 'alert-warning';
    case ALERT_TYPE_SUCCESS:
      return 'alert-success';
    case ALERT_TYPE_INFO:
      return 'alert-info';
    default:
      throw new Error(`Unsupported alert type=${type}`);
  }
};
