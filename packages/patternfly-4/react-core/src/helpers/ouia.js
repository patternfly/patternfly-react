export const isOUIAEnvironment = () => window.localStorage.ouia;

let id = 0;
export const getUniqueId = () => id++;
