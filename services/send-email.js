export async function sendEmail(formData, endpoint) {

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  const responseData = await response.json();

  return responseData;
}
