
// Takes in an endpoint, method, and request body, and sends to backend.
async function backendCall (endPoint, method, requestBody) {
  const req = await fetch(`http://localhost:5000/${endPoint}}`, {
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: (method === 'GET') ? undefined : JSON.stringify(requestBody),
  });
  return req.json();
}

export { backendCall };
