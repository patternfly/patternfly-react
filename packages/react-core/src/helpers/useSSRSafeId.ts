import { useId, useState } from 'react';

const reactUseId: (() => string) | undefined = typeof useId === 'function' ? useId : undefined;

let counter = 0;

/**
 * SSR-safe ID generation hook. Uses React.useId() when available (React 18+)
 * for guaranteed SSR/CSR match. Falls back to a counter-based approach for React 17.
 */
export const useSSRSafeId: (prefix?: string) => string = reactUseId
  ? function useSSRSafeId(prefix = 'pf-'): string {
      return `${prefix}${reactUseId!()}`;
    }
  : function useSSRSafeId(prefix = 'pf-'): string {
      const [id] = useState(() => `${prefix}${++counter}`);
      return id;
    };
