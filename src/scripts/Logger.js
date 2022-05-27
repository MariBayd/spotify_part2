/** Class catch errors */
export default class Logger {

    /** 
     * Log request error
     * @param {string} message - error message 
     * @param {boolean} showAlert - show alert, if this parameter is true 
     */
        static logError(message, showAlert=false) {
          if (showAlert) alert('Ошибка! Проверьте подключение к интернету');
          else console.log(message);

          throw new Error(message);
        }
    }