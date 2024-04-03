import axios from 'axios'
const apikey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWExNDUzYzk1ZmQxZTU0NGFhZmY2MWY2NTVlYzg3NiIsInN1YiI6IjYyYjBjZTAwM2ZhYmEwMDA1MjEwMDVlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WkhqsOkPQRJaVxbP98xYLgUb_eSUlRFU5rEdPkSZ1hk'

export const useAxiosClient = (baseURL = 'https://api.themoviedb.org/3/', headers = {}) => {
  const instance = axios.create({
    baseURL,
    headers,
    withCredentials: false
  })

  const axiosErrorFactory = (error) => {
    let e

    if (error.response) {
      e = {
        ...error.response.data,
        code: error.response.status
      }
    } else if (error.request) {
      e = {
        ...error.request,
        code: error.request.status
      }
    } else {
      e = {
        ...error,
        code: null
      }
    }

    return e
  }

  instance.interceptors.request.use(
    (request) => {
      request.headers['Content-Type'] = 'application/json'
      request.headers['Authorization'] = `Bearer ${apikey}`
      //   const jwt = token || Cookies.get(import.meta.env.VITE_COOKIE_JWT)

      //   if (jwt) {
      //     if (verifyTimeToken(jwt)) {
      //       request.headers.common['Authorization'] = `Bearer ${jwt}`
      //     } else {
      //       redirectToLogin()
      //     }
      //   } else {
      //     redirectToLogin()
      //   }

      return request
    },
    (error) => Promise.reject(error)
  )

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status

      if (status === 401 || status === 403) {
        // redirectToLogin()
      }

      return Promise.reject(error)
    }
  )

  const httpGet = ({ url, params = {} }) => {
    return new Promise((resolve, reject) => {
      instance
        .get(url, params)
        .then((response) => resolve(response.data))
        .catch((error) => reject(axiosErrorFactory(error)))
    })
  }

  const httpPost = ({ url, body = {}, params = {} }) => {
    return new Promise((resolve, reject) => {
      instance
        .post(url, body, params)
        .then((response) => resolve(response.data))
        .catch((error) => reject(axiosErrorFactory(error)))
    })
  }

  const httpPatch = ({ url, body = {}, params = {} }) => {
    return new Promise((resolve, reject) => {
      instance
        .patch(url, body, params)
        .then((response) => resolve(response.data))
        .catch((error) => reject(axiosErrorFactory(error)))
    })
  }

  const httpPut = ({ url, body = {}, params = {} }) => {
    return new Promise((resolve, reject) => {
      instance
        .put(url, body, params)
        .then((response) => resolve(response.data))
        .catch((error) => reject(axiosErrorFactory(error)))
    })
  }

  const httpDelete = ({ url, params = {} }) => {
    return new Promise((resolve, reject) => {
      instance
        .delete(url, params)
        .then((response) => resolve(response.data))
        .catch((error) => reject(axiosErrorFactory(error)))
    })
  }

  return {
    instance,
    httpGet,
    httpPost,
    httpPatch,
    httpPut,
    httpDelete
  }
}
