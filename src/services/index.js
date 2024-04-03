import { useAxiosClient } from '@/config/http/http'
import {
  url_authentication,
  url_trending_api,
  url_popular_api,
  url_details_api,
  url_credits_api,
  url_search_api
} from '@/config/http/urls-api'

const { httpGet } = useAxiosClient()

export const getAuthentication = async () => {
  try {
    await httpGet({ url: url_authentication })
  } catch (error) {
    throw new Error(error)
  }
}

export const getTreding = async (period) => {
  try {
    const { results } = await httpGet({ url: url_trending_api(period) })
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const getPopular = async (type) => {
  try {
    const { results } = await httpGet({ url: url_popular_api(type) })
    return results
  } catch (error) {
    throw new Error(error)
  }
}

export const getDetails = async ({ type, id }) => {
  try {
    return await httpGet({ url: url_details_api(type, id) })
  } catch (error) {
    throw new Error(error)
  }
}

export const getCredits = async ({ type, id }) => {
  try {
    return await httpGet({ url: url_credits_api(type, id) })
  } catch (error) {
    throw new Error(error)
  }
}

export const getSearch = async (query) => {
  try {
    const { results } = await httpGet({ url: url_search_api(query) })
    return results
  } catch (error) {
    throw new Error(error)
  }
}
