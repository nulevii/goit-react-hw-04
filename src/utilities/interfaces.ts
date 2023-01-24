export interface IPopularFilms {
  data: Data
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: Request
}

export interface Data {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Headers {
  'access-control-allow-origin': string
  'access-control-expose-headers': string
  'alt-svc': string
  'cache-control': string
  'content-encoding': string
  'content-type': string
  date: string
  etag: string
  server: string
  vary: string
  via: string
  'x-amz-cf-id': string
  'x-amz-cf-pop': string
  'x-cache': string
  'x-memc': string
  'x-memc-age': string
  'x-memc-expires': string
  'x-memc-key': string
}

export interface Config {
  transitional: Transitional
  adapter: string[]
  transformRequest: any[]
  transformResponse: any[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  headers: Headers2
  params: Params
  method: string
  url: string
}

export interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export interface Headers2 {
  Accept: string
}

export interface Params {
  api_key: string
  include_adult: boolean
  page: number
}

export interface ISelectedFilm {
  data: filmData
  status: number
  statusText: string
  headers: Headers
  config: Config
  request: Request
}

export interface filmData {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface ICast {
  data: CastData
}
export interface CastData {
  id: number
  cast: Cast[]
  crew: Crew[]
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface Crew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  credit_id: string
  department: string
  job: string
}
export interface IReviews {
  data: ReviewsType
}
export interface ReviewsType {
  id: number
  page: number
  results: ReviewsResult[]
  total_pages: number
  total_results: number
}

export interface ReviewsResult {
  author: string
  author_details: AuthorDetails
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface AuthorDetails {
  name: string
  username: string
  avatar_path?: string
  rating?: number
}

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}
