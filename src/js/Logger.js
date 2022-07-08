/** Class show errors */
export default class Logger {
  /**
   * Log request error
   * @param {string} error - error message
   * @param {string} alertMessage - alert message
   */
  static logError(error, alertMessage = "") {
    if (alertMessage) alert(alertMessage);
    throw new Error(error);
  }
}
