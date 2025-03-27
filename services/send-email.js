export async function sendEmail(endpoint, formData) {

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  const responseData = await response.json();

  return responseData;
}
