const BASE_SERVER_URL = process.env.BASE_SERVER_URL;

const request = (url: string, options?: RequestInit) => fetch(
    `${BASE_SERVER_URL}${url}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => console.error(error) );
  
  request.get = (url: string, options?: RequestInit) => request(url, { ...options, method: 'GET' });
  request.post = (url: string, body: Record<string, unknown>, options?: RequestInit) => request(url, { 
    ...options,
    body: JSON.stringify(body),
    method: 'POST'
  });
  
  export { request };
  