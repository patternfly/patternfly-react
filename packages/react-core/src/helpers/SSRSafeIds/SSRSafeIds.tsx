import { useSSRSafeId } from '../useSSRSafeId';

const ouiaPrefix = 'OUIA-Generated-';

export interface SSRSafeIdsProps {
  /** Prefix for the generated component ID */
  prefix: string;
  /** OUIA component type. If provided, a stable OUIA ID will be generated. */
  ouiaComponentType?: string;
  /** Children render function receiving (generatedId, generatedOuiaId?) */
  children: (id: string, ouiaId?: string) => React.ReactNode;
}

/**
 * Provides SSR/Strict-Mode-safe IDs for class components via render props.
 * Uses useSSRSafeId() (React.useId) for both component ID and OUIA ID,
 * ensuring consistent values between server and client rendering.
 */
export const SSRSafeIds = ({ prefix, ouiaComponentType, children }: SSRSafeIdsProps) => {
  const id = useSSRSafeId(prefix);
  const ouiaId = useSSRSafeId(ouiaComponentType ? `${ouiaPrefix}${ouiaComponentType}-` : 'pf-unused-');
  return (children(id, ouiaComponentType ? ouiaId : undefined) as React.ReactElement) ?? null;
};
SSRSafeIds.displayName = 'SSRSafeIds';
