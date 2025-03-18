/* eslint-disable no-console */
/**
 * Enhanced logging utility with timestamps, context, and structured output
 */
const logger = {
  /**
   * Success log with green color and optional additional context
   * @param {string} message - Primary message to log
   * @param {Object} [options] - Additional logging options
   * @param {string} [options.source] - Source of the log (e.g., module name)
   * @param {Object} [options.context] - Additional metadata to log
   */
  success: (message, options = {}) => {
    const timestamp = new Date().toISOString();
    const sourcePrefix = options.source ? `[${options.source}] ` : '';
    const formattedMessage = `\x1b[32m✓ [${timestamp}] ${sourcePrefix}${message}\x1b[0m`;

    console.log(formattedMessage);

    // Optional context logging
    if (options.context) {
      console.log(JSON.stringify(options.context, null, 2));
    }
  },

  /**
   * Informational log with optional context
   * @param {string} message - Primary message to log
   * @param {Object} [options] - Additional logging options
   * @param {string} [options.source] - Source of the log (e.g., module name)
   * @param {Object} [options.context] - Additional details to log
   */
  info: (message, options = {}) => {
    const timestamp = new Date().toISOString();
    const sourcePrefix = options.source ? `[${options.source}] ` : '';
    const formattedMessage = `ℹ [${timestamp}] ${sourcePrefix}${message}`;

    console.log(formattedMessage);

    // Optional details logging
    if (options.context) {
      console.log(JSON.stringify(options.context, null, 2));
    }
  },

  /**
   * Warning log with yellow color and optional context
   * @param {string} message - Primary warning message
   * @param {Object} [options] - Additional logging options
   * @param {string} [options.source] - Source of the warning
   * @param {Object} [options.context] - Context or additional information about the warning
   */
  warn: (message, options = {}) => {
    const timestamp = new Date().toISOString();
    const sourcePrefix = options.source ? `[${options.source}] ` : '';
    const formattedMessage = `\x1b[33m⚠ [${timestamp}] ${sourcePrefix}${message}\x1b[0m`;

    console.warn(formattedMessage);

    // Optional context logging
    if (options.context) {
      console.warn(JSON.stringify(options.context, null, 2));
    }
  },

  /**
   * Error log with red color and comprehensive error details
   * @param {string} message - Primary error message
   * @param {Error|string} [error] - Error object or error message
   * @param {Object} [options] - Additional logging options
   * @param {string} [options.source] - Source of the error
   * @param {Object} [options.context] - Additional context about the error
   */
  error: (message, error, options = {}) => {
    const timestamp = new Date().toISOString();
    const sourcePrefix = options.source ? `[${options.source}] ` : '';
    const formattedMessage = `\x1b[31m✗ [${timestamp}] ${sourcePrefix}${message}\x1b[0m`;

    console.error(formattedMessage);

    // Log error details
    if (error) {
      if (error instanceof Error) {
        console.error(`Error Name: ${error.name}`);
        console.error(`Error Message: ${error.message}`);
        console.error('Stack Trace:');
        console.error(error.stack);
      } else {
        console.error('Error Details:', error);
      }
    }

    // Optional context logging
    if (options.context) {
      console.error('Error Context:');
      console.error(JSON.stringify(options.context, null, 2));
    }
  },

  /**
   * Debug log with gray color (only shown when verbose mode is enabled)
   * @param {string} message - Debug message
   * @param {Object} [options] - Additional logging options
   * @param {string} [options.source] - Source of the debug message
   * @param {Object} [options.context] - Additional debug context
   */
  debug: (message, options = {}) => {
    // Only log if verbose mode is enabled
    if (!process.env.VERBOSE) {
      return;
    }

    const timestamp = new Date().toISOString();
    const sourcePrefix = options.source ? `[${options.source}] ` : '';
    const formattedMessage = `\x1b[90m🔍 [${timestamp}] ${sourcePrefix}${message}\x1b[0m`;

    console.log(formattedMessage);

    // Optional context logging
    if (options.context) {
      console.log(JSON.stringify(options.context, null, 2));
    }
  },

  /**
   * Generate a table from data
   * @param {Array} data - Array of objects to display
   * @param {Array} columns - Column headers
   * @param {string} title - Table title
   */
  table: (data, columns, title) => {
    console.log(`\n${title || 'Data Table'}:`);
    console.table(data, columns);
  }
};

export default logger;
