// @ts-nocheck
import * as React from 'react';
import styleKeys from '@breakaway/react-styles/css/components/Cat/Cat.js';
import variables from '@breakaway/react-styles/css/base/base.module.css';
import styles from '@breakaway/react-styles/css/components/Cat/Cat.module.css';
import { css } from '@breakaway/react-styles';

export const Cat = () => (
  <div className={css(variables.root, styles[styleKeys.catFace])}>
    <div className={styles[styleKeys.catEyes]}></div>
    <div className={styles[styleKeys.catNose]}></div>
    <div className={styles[styleKeys.catMouth]}></div>
  </div>
);

Cat.displayName = 'Cat';
