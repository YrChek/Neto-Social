export default async function getFetch(other, token, bool) {
  let data;
  let error = false;
  try {
    const response = await fetch(process.env.REACT_APP_BASE_URL + other, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 401) {
      localStorage.clear();
      error = 401;
      throw new Error (response.status)
    }
    if (!response.ok) {
      throw new Error (response.statusText)
    }
    data = await response.json()
    if (bool) {
      const res = JSON.stringify(data)
      localStorage.setItem('user', res)
    }
    console.log('Fetch')
  } catch (e) {
      console.log(e)
      data = null
      if (!error) error = true
  } finally {
      return { data, error }
  }
}
