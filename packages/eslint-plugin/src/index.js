/* eslint-disable global-require */
import recommended from './config/recommended';
import importDefaultName from './rules/import-default-name';

export const rules = {
  'import-default-name': importDefaultName
};

export const configs = {
  recommended
};
