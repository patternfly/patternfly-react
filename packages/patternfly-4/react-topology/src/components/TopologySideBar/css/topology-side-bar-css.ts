import { StyleSheet } from '@patternfly/react-styles';

export const topologySideBarCss = StyleSheet.parse(`
  .pf-topology-container__with-sidebar {
    position: relative;
  }

  .pf-topology-side-bar {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    max-width: 100%;
    height: 100%;
    background-color: var(--pf-global--BackgroundColor--100);
    overflow-x: hidden;
    opacity: 0;
    z-index: 5;
    -webkit-transition: opacity 0.15s linear, transform 0.15s linear;
    -o-transition: opacity 0.15s linear, transform 0.15s linear;
    transition: opacity 0.15s linear, transform 0.15s linear;

    &.in {
      opacity: 1;
    }

    &.shown {
      width: 100%;
    }

    &__dismiss.pf-c-button {
      position: absolute;
      top: calc(2rem - 0.375rem + 0.0625rem);
      right: 1rem;
    }

    &:not(.in) {
      -webkit-transform: translate3d(-25%, 0, 0);
      transform: translate3d(25%, 0, 0);
    }
    
    > .pf-topology-side-bar__dismiss + * {
      margin-right: 2rem;
    }

    > .pf-topology-side-bar__header + * {
      margin-top: 1.5rem;
    }
  }
   
  @media(min-width: 768px) {
    .pf-topology-container__with-sidebar {
      overflow-x: hidden;
      background-color: var(--pf-global--Color--light-200) !important;
      .pf-topology-content {
        -webkit-transition: width 0.15s linear;
        -o-transition: width 0.15s linear;
        transition: width 0.15s linear;
        position: absolute;
        left: 0;
        min-width: 100%;
      }

      &.pf-topology-container__with-sidebar--open {
        .pf-topology-content {
          width: 180px;
          min-width: calc(100% - 550px);
        }
      }
    }
    .pf-topology-side-bar.shown {
      box-shadow: var(--pf-global--BoxShadow--md);
      width: calc(100% - 180px);
      max-width: 550px;
    }
  }
`);
