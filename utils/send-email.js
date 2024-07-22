
export async function sendEmail(formData) {
  const apiEndpoint = '/api/email';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    body: formData,
  });

  const responseData = await response.json();

  return responseData;
}