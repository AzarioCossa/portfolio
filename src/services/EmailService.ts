import EmailModel from '../models/EmailModel';

class EmailService {

  static async sendEmail(emailData) {

    if (!(emailData instanceof EmailModel)) {
      throw new Error('The given data is invalid');
    }

    console.log('A SIMULAR O ENVIO DE EMAIL PARA O BACKEND...');
    console.log('Nome:', emailData.nome);
    console.log('Email:', emailData.email);
    console.log('Mensagem:', emailData.mensagem);

    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Email "enviado" com sucesso!');
        resolve({
          success: true,
          message: `Obrigado pelo seu contacto, ${emailData.nome}! A sua mensagem foi enviada. (Simulação)`
        });
      }, 1000);
    });
  }
}

export default EmailService;
