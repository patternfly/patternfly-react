export const isOUIAEnvironment = () => typeof window !== 'undefined' && window.localStorage.ouia;

let id = 0;
export const getUniqueId = () => id++;
