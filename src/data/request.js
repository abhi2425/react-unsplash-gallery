import axios from './axiosInstances'

const request = async (url = '', method = 'GET', data = null) => {
  try {
    const response = await axios({ url, method, data })
    return { response, status: 'success' }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    }

    return {
      response: error.response,
      status: 'failure',
    }
  }
}

export default request
