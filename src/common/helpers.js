export const bindMethods = (context, methods) => {
  methods.forEach(method => {
    context[method] = context[method].bind(context);
  });
};

export const noop = Function.prototype;

export const KEY_CODES = { TAB_KEY: 9, ENTER_KEY: 13, ESCAPE_KEY: 27 };
