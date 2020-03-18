export function getOUIAProps(componentName: string, id: string) {
  return {
    'data-ouia-component-ns': 'PF4',
    'data-ouia-component-type': componentName,
    'data-ouia-id': id
  };
}
