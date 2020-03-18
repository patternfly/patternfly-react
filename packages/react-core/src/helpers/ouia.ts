type OuiaId = number | string;

// https://ouia.readthedocs.io/en/latest/README.html#ouia-component
export interface OUIAProps {
  // If there is only one instance of the component on the page at once, it is OPTIONAL
  ouiaId?: OuiaId;
  // False if in animation
  ouiaSafe?: Boolean;
}

let uid = 0;
export function getOUIAProps(componentName: string, id: OuiaId | undefined, ouiaSafe: Boolean = true) {
  return {
    'data-ouia-component-type': `PF4/${componentName}`,
    'data-ouia-safe': ouiaSafe,
    'data-ouia-id': id === undefined ? uid++ : id
  };
}
