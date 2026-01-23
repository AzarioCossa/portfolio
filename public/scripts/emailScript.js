async function sendContactForm(formData) {

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'There was an unknown error');
    }

    return result;

  } catch (error) {
    console.error('Error while communicating with the server', error.message);

    return {
      success: false,
      message: error.message,
    };
  }
}