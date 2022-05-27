/** Class catch errors */
export default class Logger {

    /** 
     * Log request error
     * @param {string} message - error message
     */
        static logRequestError(message) {
          alert('Ошибка! Проверьте подключение к интернету');
          throw new Error(message);
        }
    /** 
     * Log error of create element
     * @param {string} message - error message
     */
        static logCreateViewError(message) {
          console.log(message);
          throw new Error(message);
        }
    }