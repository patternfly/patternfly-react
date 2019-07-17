export const isOUIAEnvironment = (): boolean => typeof window !== 'undefined' && window.localStorage.ouia && window.localStorage.ouia.toLowerCase() === 'true' || false;
export const generateOUIAId = (): boolean => typeof window !== 'undefined' && window.localStorage['ouia-generate-id'] && window.localStorage['ouia-generate-id'].toLowerCase() === 'true' || false;

let id = 0;
export const getUniqueId = (): number => id++;
