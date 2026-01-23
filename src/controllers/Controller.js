import EmailModel from '../models/EmailModel';
import EmailService from '../services/EmailService';

class EmailController {
 
  static async handleContactSubmission({ name, email, message }) {
    try {
      
      const emailData = new EmailModel(name, email, message);

      const result = await EmailService.sendEmail(emailData);

      return result;
    } catch (error) {

      console.error('[EmailController] Error :', error.message);
      return {
        success: false,
        message: error.message
      };
    }
  }
}

export default EmailController;