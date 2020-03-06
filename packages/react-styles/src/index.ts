// https://github.com/JedWatson/classnames/blob/master/index.js
export function css(...args: any): string {
  const classes = [] as string[];
  const hasOwn = {}.hasOwnProperty;

  args.forEach((arg: any) => {
    if (!arg) return;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = css.apply(null, arg as any);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(' ');
}