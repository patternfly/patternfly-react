export const isOUIAEnvironment = (): boolean => typeof window !== 'undefined' && window.localStorage.ouia && window.localStorage.ouia.toLocaleLowerCase() === 'true' || false;
export const generateOUIAId = (): boolean => typeof window !== 'undefined' && window.localStorage['ouia-generate-id'] && window.localStorage.ouia.toLocaleLowerCase() === 'true' || false;

let id = 0;
export const getUniqueId = (): number => id++;
