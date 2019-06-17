import { StyleSheet } from '@patternfly/react-styles';

export const topologyViewCss = StyleSheet.parse(`
  .pf-topology-content {
    background-color: var(--pf-global--Color--light-200);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .pf-topology-control-bar {
    position: absolute;
    bottom: var(--pf-global--spacer--md);
    left: var(--pf-global--spacer--xl);
    
    .pf-c-button.pf-m-tertiary {
      background-color: var(--pf-global--BackgroundColor--100);
      border: none;
      border-radius: var(--pf-global--BorderRadius--sm);
      box-shadow: var(--pf-global--BoxShadow--sm);
    }
    .pf-c-button.pf-m-tertiary:after {
      display: none;
    }
    .pf-c-button.pf-m-tertiary:hover {
      border: none;
      box-shadow: var(--pf-global--BoxShadow--md);
    }
  }
`);
