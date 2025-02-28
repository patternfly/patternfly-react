import { useEffect, useLayoutEffect } from 'react';
import { canUseDOM } from './util';

/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */
export const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
