"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Joins args into a className string
 *
 * @param {any} args list of objects, string, or arrays to reduce
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Adapted from https://github.com/JedWatson/classnames/blob/master/index.js
    var classes = [];
    var hasOwn = {}.hasOwnProperty;
    args.filter(Boolean).forEach(function (arg) {
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg) && arg.length) {
            var inner = css.apply(void 0, arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    });
    return classes.join(' ');
}
exports.css = css;
//# sourceMappingURL=index.js.map