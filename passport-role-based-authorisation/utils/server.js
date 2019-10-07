function getServerApiUrl() {
  return process.env.BASE_API_URL
}

const callFetchAsync = async (url, method, body, headers = {}) => {
  try {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/json',
        ...headers
      }),
      body
    }

    if (body) {
      options.body = JSON.stringify(body)
    }

    const response = await fetch(`${getServerApiUrl()}${url}`, {
      method,
      credentials: 'same-origin',
      ...options
    })

    return await response.json()
  } catch (err) {
    return {
      success: false,
      data: err
    }
  }
}

const postAsync = (url, body) => {
  return callFetchAsync(url, 'POST', body)
}

export { postAsync }
