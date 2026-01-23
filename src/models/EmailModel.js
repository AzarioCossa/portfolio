class EmailModel {
  name;
  email;
  message;

  constructor(name, email, message) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new Error('O campo "nome" é obrigatório.');
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      throw new Error('O campo "email" é inválido.');
    }
    if (!message || typeof message !== 'string' || message.trim() === '') {
      throw new Error('O campo "mensagem" é obrigatório.');
    }

    this.nome = name.trim();
    this.email = email.trim();
    this.mensagem = name.trim();
  }
}

export default EmailModel;
