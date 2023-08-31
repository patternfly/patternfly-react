import { createFocusTrap, FocusTrap as FocusTrapInstance, Options as FocusTrapOptions } from 'focus-trap';
import React, { ComponentPropsWithRef, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { useUnmountEffect } from '../useUnmountEffect';

export interface FocusTrapProps extends ComponentPropsWithRef<'div'> {
  active?: boolean;
  paused?: boolean;
  focusTrapOptions?: FocusTrapOptions;
  /** Prevent from scrolling to the previously focused element on deactivation */
  preventScrollOnDeactivate?: boolean;
}

export const FocusTrap = forwardRef<HTMLDivElement, FocusTrapProps>(function FocusTrap(
  { active = true, paused = false, focusTrapOptions = {}, preventScrollOnDeactivate = false, ...props },
  forwardedRef
) {
  // Fall back to internal ref if no forwarded ref is provided.
  const ref = useRef<HTMLDivElement>(null);
  useImperativeHandle(forwardedRef, () => ref.current!);

  // Create focus trap instance after rendering DOM.
  const focusTrapRef = useRef<FocusTrapInstance | null>(null);
  useEffect(() => {
    const focusTrap = createFocusTrap(ref.current!, {
      ...focusTrapOptions,
      returnFocusOnDeactivate: false
    });
    focusTrapRef.current = focusTrap;

    // Deactivate focus trap on cleanup.
    return () => {
      focusTrap.deactivate();
    };
  }, []);

  // Handle activation status based on 'active' prop.
  useEffect(() => {
    const focusTrap = focusTrapRef.current;
    active ? focusTrap?.activate() : focusTrap?.deactivate();
  }, [active]);

  // Handle pause status based on 'pause' prop.
  useEffect(() => {
    const focusTrap = focusTrapRef.current;
    paused ? focusTrap?.pause() : focusTrap?.unpause();
  }, [paused]);

  // Store the currently active element to restore focus to later.
  const previousElementRef = useRef(typeof document !== 'undefined' ? document.activeElement : null);

  // Restore focus to the previously active element on unmount.
  useUnmountEffect(() => {
    if (focusTrapOptions.returnFocusOnDeactivate !== false && previousElementRef.current instanceof HTMLElement) {
      previousElementRef.current.focus({
        preventScroll: preventScrollOnDeactivate
      });
    }
  });

  return <div ref={ref} {...props} />;
});

FocusTrap.displayName = 'FocusTrap';
