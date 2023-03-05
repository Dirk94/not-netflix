import axios from 'axios'

const ENDPOINT = 'https://api.tvmaze.com'

export async function getAllShows() {
  const response = await axios.get(`${ENDPOINT}/shows`)
  return response?.data
}

export async function getShowDetails({ id }) {
  const response = await axios.get(`${ENDPOINT}/shows/${id}`)
  return response?.data
}

export async function searchShows({ query }) {
  const response = await axios.get(`${ENDPOINT}/search/shows`, {
    params: {
      q: query
    }
  })
  return response?.data?.map((items) => items.show)
}
