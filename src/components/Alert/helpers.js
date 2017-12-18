import {
  ALERT_TYPE_DANGER,
  ALERT_TYPE_ERROR,
  ALERT_TYPE_WARNING,
  ALERT_TYPE_SUCCESS,
  ALERT_TYPE_INFO,
} from './constants';

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
  }
};
