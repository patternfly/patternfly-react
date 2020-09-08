// @ts-ignore
import supportedBrowsersRegex from './supportedBrowsersRegex';

/**
 * Is the browser supported by patternfly
 * @param  userAgent=navigator.userAgent The browser user-agent string.
 * @return                               Boolean indication if patternfly
 *                                       supported the given user-agent.
 */
export default (userAgent = navigator.userAgent) => supportedBrowsersRegex.test(userAgent);
