export const isOUIAEnvironment = (): boolean => typeof window === 'undefined' || window.localStorage.ouia;

let id = 0;
export const getUniqueId = (): number => id++;
