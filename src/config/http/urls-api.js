const language = navigator.language

export const url_authentication = 'authentication'
export const url_trending_api = (period) => `trending/all/${period}?language=${language}`
export const url_popular_api = (type) => `${type}/popular?language=${language}&page=1`
export const url_details_api = (type, id) => `${type}/${id}?language=${language}&page=1`
export const url_credits_api = (type, id) => `${type}/${id}/credits?language=${language}&page=1`
export const url_search_api = (query) =>
  `search/collection?query=${query}&include_adult=false?language=${language}&page=1`
