import globalBreakpointXs from '@patternfly/react-tokens/dist/esm/global_breakpoint_xs';
import globalBreakpointSm from '@patternfly/react-tokens/dist/esm/global_breakpoint_sm';
import globalBreakpointMd from '@patternfly/react-tokens/dist/esm/global_breakpoint_md';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/global_breakpoint_lg';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/global_breakpoint_xl';
import globalBreakpoint2Xl from '@patternfly/react-tokens/dist/esm/global_breakpoint_2xl';

const xsBreakpointValue = parseInt(globalBreakpointXs.value); // 0
const smBreakpointValue = parseInt(globalBreakpointSm.value); // 576
const mdBreakpointValue = parseInt(globalBreakpointMd.value); // 768
const lgBreakpointValue = parseInt(globalBreakpointLg.value); // 992
const xlBreakpointValue = parseInt(globalBreakpointXl.value); // 1200
const xl2BreakpointValue = parseInt(globalBreakpoint2Xl.value); // 1450

const cssToJs = (css: string) => {
    
};

export const MastHeadVars = (width: number) => {
  if (width >= mdBreakpointValue) {
    return `
    --pf-c-masthead--GridTemplateColumns: var(--pf-c-masthead--m-display-inline--GridTemplateColumns);
    --pf-c-masthead__main--GridColumn: var(--pf-c-masthead--m-display-inline__main--GridColumn);
    --pf-c-masthead__main--MinHeight: var(--pf-c-masthead--m-display-inline__main--MinHeight);
    --pf-c-masthead__main--Order: var(--pf-c-masthead--m-display-inline__main--Order);
    --pf-c-masthead__main--FlexBasis: var(--pf-c-masthead--m-display-inline__main--FlexBasis);
    --pf-c-masthead__main--PaddingTop: var(--pf-c-masthead--m-display-inline__main--PaddingTop);
    --pf-c-masthead__main--PaddingBottom: var(--pf-c-masthead--m-display-inline__main--PaddingBottom);
    --pf-c-masthead__main--MarginRight: var(--pf-c-masthead--m-display-inline__main--MarginRight);
    --pf-c-masthead__main--before--BorderBottom: var(--pf-c-masthead--m-display-inline__main--BorderBottom);
    --pf-c-masthead__content--GridColumn: var(--pf-c-masthead--m-display-inline__content--GridColumn);
    --pf-c-masthead__content--MinHeight: var(--pf-c-masthead--m-display-inline__content--MinHeight);
    --pf-c-masthead__content--Order: var(--pf-c-masthead--m-display-inline__content--Order);
    --pf-c-masthead__content--PaddingTop: var(--pf-c-masthead--m-display-inline__content--PaddingTop);
    --pf-c-masthead__content--PaddingBottom: var(--pf-c-masthead--m-display-inline__content--PaddingBottom);
    --pf-c-masthead__content--MarginLeft: var(--pf-c-masthead--m-display-inline__content--MarginLeft);
    --pf-c-masthead__content--c-nav--m-horizontal--MarginRight: var(--pf-c-masthead--m-display-inline__content--c-nav--m-horizontal--MarginRight);
    --pf-c-masthead__content--c-nav--m-horizontal--MarginLeft: var(--pf-c-masthead--m-display-inline__content--c-nav--m-horizontal--MarginLeft);
    `;
  }
};
