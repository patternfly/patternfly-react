import { createContext, useContext, FunctionComponent, ReactNode } from 'react';

/** Configuration for animations throughout PatternFly components */
export interface AnimationsConfig {
  /** Whether animations are enabled globally */
  hasAnimations?: boolean;
}

/** Props for the AnimationsProvider component */
export interface AnimationsProviderProps {
  /** Animation configuration settings */
  config?: AnimationsConfig;
  /** Child components that will have access to the animations context */
  children: ReactNode;
}

/** Context to provide animations configuration to child components */
const AnimationsContext = createContext<AnimationsConfig>({
  hasAnimations: false
});

/**
 * AnimationsProvider is an application-level provider that provides uniform
 * animation configuration for all PatternFly React components via the React context API.
 *
 * **Usage**: Place this provider at the root of your application to enable global
 * animation control without requiring manual prop drilling throughout your component tree.
 *
 * **Benefits**:
 * - Centralized animation control for the entire application
 * - Respects user accessibility preferences (reduced motion)
 * - Components can still override the global setting when needed
 * - Works with all PatternFly components that support animations
 *
 * @example
 * ```tsx
 * // App.tsx - Place at your application root
 * import { AnimationsProvider } from '@patternfly/react-core';
 *
 * const App = () => (
 *   <AnimationsProvider config={{ hasAnimations: true }}>
 *     <MyApplication />
 *   </AnimationsProvider>
 * );
 * ```
 */
export const AnimationsProvider: FunctionComponent<AnimationsProviderProps> = ({
  config = { hasAnimations: false },
  children
}) => <AnimationsContext.Provider value={config}>{children}</AnimationsContext.Provider>;

/**
 * Hook to access the animations configuration from the nearest AnimationsProvider.
 *
 * This hook allows components to check if animations are enabled and override
 * their local hasAnimations prop accordingly.
 *
 * @returns The animations configuration object
 *
 * @example
 * ```tsx
 * const MyComponent = ({ hasAnimations: localHasAnimations, ...props }) => {
 *   const { hasAnimations: contextHasAnimations } = useAnimationsConfig();
 *   const hasAnimations = localHasAnimations ?? contextHasAnimations;
 *
 *   return <div className={hasAnimations ? 'with-animations' : ''} {...props} />;
 * };
 * ```
 */
export const useAnimationsConfig = (): AnimationsConfig => {
  const context = useContext(AnimationsContext);

  if (context === undefined) {
    // Return default config if no provider is found
    return { hasAnimations: false };
  }

  return context;
};

/**
 * Utility hook that combines local hasAnimations prop with context configuration.
 * The local prop takes precedence when explicitly set, otherwise falls back to context.
 *
 * @param localHasAnimations - The hasAnimations prop passed directly to the component
 * @returns The resolved hasAnimations value
 *
 * @example
 * ```tsx
 * const MyComponent = ({ hasAnimations: localHasAnimations, ...props }) => {
 *   const hasAnimations = useHasAnimations(localHasAnimations);
 *
 *   return <div className={hasAnimations ? 'animated' : 'static'} {...props} />;
 * };
 * ```
 */
export const useHasAnimations = (localHasAnimations?: boolean): boolean => {
  const { hasAnimations: contextHasAnimations } = useAnimationsConfig();

  // Local prop takes precedence when explicitly set (including false)
  // If local prop is undefined, fall back to context
  return localHasAnimations !== undefined ? localHasAnimations : (contextHasAnimations ?? false);
};

AnimationsProvider.displayName = 'AnimationsProvider';
