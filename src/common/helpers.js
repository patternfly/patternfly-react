export const bindMethods = (context, methods) => {
  methods.forEach(method => {
    context[method] = context[method].bind(context);
  });
};

export const noop = Function.prototype;
