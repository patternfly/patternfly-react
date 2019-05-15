// We use a JS babel plugin to resolve these imports that `tsc` doesn't
// know about, so pretend that everything will work
declare module '@patternfly/patternfly/components/*.css' {
  const styles: any;
  export default styles;
}

// We use a JS babel plugin to resolve these imports that `tsc` doesn't
// know about, so pretend that everything will work
declare module '@patternfly/patternfly/layouts/*.css' {
  const styles: any;
  export default styles;
}

// We use a JS babel plugin to resolve these imports that `tsc` doesn't
// know about, so pretend that everything will work
declare module '@patternfly/patternfly/utilities/*.css' {
  const styles: any;
  export default styles;
}
