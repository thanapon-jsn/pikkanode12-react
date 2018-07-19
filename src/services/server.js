async function fetchApi (url, method, body) {
  const baseUrl = 'http://guver.net/api/v1'
  const isObject = Object.prototype.toString.call(body) === '[object Object]'
  const opts = {
    method,
    credentials: 'include'
  }
  if (isObject) {
    opts.headers = {
      'content-type': 'application/json'
    }
  }
  opts.body = isObject ? JSON.stringify(body) : body

  const response = await fetch(baseUrl + url, opts)
  if (response.status === 404) {
    throw new Error('api not found')
  }

  try {
    const data = await response.json()
    return { status: response.status, data }
  } catch (err) {
    throw new Error('response body is not json')
  }
}

export { fetchApi }
