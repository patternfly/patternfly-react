type OuiaId = number | string;

// https://ouia.readthedocs.io/en/latest/README.html#ouia-component
export interface OUIAProps {
  // If there is only one instance of the component on the page at once, it is OPTIONAL
  ouiaId?: OuiaId;
  // False if in animation
  ouiaSafe?: boolean;
}

let uid = 0;
/** Get props to conform to OUIA spec
 *
 * @param {string} componentType OUIA component type
 * @param {number|string} id OUIA component id
 * @param {boolean} ouiaSafe false if in animation
 */
export function getOUIAProps(componentType: string, id: OuiaId | undefined, ouiaSafe: boolean = true) {
  return {
    'data-ouia-component-type': `PF4/${componentType}`,
    'data-ouia-safe': ouiaSafe,
    'data-ouia-component-id': id === undefined ? `OUIA-${componentType}-${++uid}` : id
  };
}

const ouiaIdByRoute: any = {};
/**
 * Returns a generated id based on the URL location
 *
 * @param {string} componentType OUIA component type
 * @param {string} variant Optional variant to add to the default
 */
export function getDefaultOUIAId(componentType: string, variant?: string) {
  /*
  ouiaIdByRoute = {
    [route+componentType]: [number]
  }
  */
  try {
    const key = `${window.location.href}-${componentType}-${variant || ''}`;
    if (!ouiaIdByRoute[key]) {
      ouiaIdByRoute[key] = 0;
    }
    return `OUIA-${componentType}-${variant ? `${variant}-` : ''}${++ouiaIdByRoute[key]}`;
  } catch (exception) {
    return `OUIA-${componentType}-${variant ? `${variant}-` : ''}${++uid}`;
  }
}
