/**
 * Contains the miscellaneous route handlers.
 * @author Kayode Ogidan <https://github.com/KDEE247>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
