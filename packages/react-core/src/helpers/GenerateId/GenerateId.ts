/** SSR-safe ID generation component using render props.
 * For function components, prefer the useSSRSafeId hook instead.
 *
 * Example of how to use this component
 *
 * const Component = ({id}: {id: string}) => (
 *  <GenerateId>{randomId => (
 *     <div id={id || randomId}>
 *       div with random ID
 *     </div>
 *   )}
 *  </GenerateId>
 *  );
 */
import { useSSRSafeId } from '../useSSRSafeId';

export interface GenerateIdProps {
  /** String to prefix the id with */
  prefix?: string;
  /** Component to be rendered with the generated id */
  children(id: string): React.ReactNode;
  /** @deprecated Has no effect. Kept for backward compatibility. */
  isRandom?: boolean;
}

const GenerateId = ({ prefix = 'pf-random-id-', children }: GenerateIdProps) => {
  const id = useSSRSafeId(prefix);
  return children(id) as React.ReactElement;
};
GenerateId.displayName = 'GenerateId';

export { GenerateId };
