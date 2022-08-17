export const http = async (url: string, method: 'POST' | 'GET', body = {}) => {
  try {
    const response = await fetch(url, {
      method,
      ...(body && { body: JSON.stringify(body) }),
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
