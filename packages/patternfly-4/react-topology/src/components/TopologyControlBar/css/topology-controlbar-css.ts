import { StyleSheet } from '@patternfly/react-styles';

export const topologyControlbarCss = StyleSheet.parse(`
  .pf-topology-control-bar {
    position: absolute;
    bottom: var(--pf-global--spacer--md);
    left: var(--pf-global--spacer--xl);
    
    &__button.pf-c-button.pf-m-tertiary {
      margin-right: var(--pf-global--spacer--xs);
      margin-top: var(--pf-global--spacer--xs);
      background-color: var(--pf-global--BackgroundColor--100);
      border: none;
      border-radius: var(--pf-global--BorderRadius--sm);
      box-shadow: var(--pf-global--BoxShadow--sm);

      &:after {
        display: none;
      }
      &:hover {
        border: none;
        box-shadow: var(--pf-global--BoxShadow--md);
      }
    }
  }
`);
