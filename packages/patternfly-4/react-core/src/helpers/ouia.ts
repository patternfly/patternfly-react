export const isOUIAEnvironment = (): boolean => typeof window !== 'undefined' && window.localStorage.ouia && window.localStorage.ouia.toLocaleLowerCase() === 'true' || false;

let id = 0;
export const getUniqueId = (): number => id++;
