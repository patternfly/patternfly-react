export const BaseSizes: {
  xs: 'xs';
  sm: 'sm';
  md: 'md';
  lg: 'lg';
  xl: 'xl';
  '2xl': '2xl';
  '3xl': '3xl';
  '4xl': '4xl';
};

export const DeviceSizes: Pick<typeof BaseSizes, 'sm' | 'md' | 'lg' | 'xl'>;
