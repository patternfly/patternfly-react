// Because this is such a specific icon that requires being wrapped in a pf-v[current version]-c-button element,
// we don't want to export this to consumers nor include it in the react-icons package as a custom icon.
export const hamburgerIcon = (
  <svg viewBox="0 0 10 10" className="pf-v6-c-button--hamburger-icon pf-v6-svg" width="1em" height="1em">
    <path className="pf-v6-c-button--hamburger-icon--top" d="M1,1 L9,1"></path>
    <path className="pf-v6-c-button--hamburger-icon--middle" d="M1,5 L9,5"></path>
    <path className="pf-v6-c-button--hamburger-icon--arrow" d="M1,5 L1,5 L1,5"></path>
    <path className="pf-v6-c-button--hamburger-icon--bottom" d="M9,9 L1,9"></path>
  </svg>
);
