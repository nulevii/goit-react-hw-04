import axios from 'axios'
import { IPopularFilms, ISelectedFilm, ICast, IReviews } from './interfaces'

const API_KEY = 'a8c13239d5351cd341496e4bdbeed27b'
export const getTrending = async ({ pageNumber }: { pageNumber: number }): Promise<IPopularFilms | undefined> => {
  const trendingLink = 'https://api.themoviedb.org/3/trending/movie/week'
  try {
    const data: IPopularFilms = await axios.get(trendingLink, {
      params: {
        api_key: API_KEY,
        include_adult: false,
        page: pageNumber
      }
    })
    return data
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    console.error(message)
  }
}

export const getSearchMovies = async ({ pageNumber, query = '' }: { pageNumber: number, query: string }): Promise<IPopularFilms | undefined> => {
  const searchLink = 'https://api.themoviedb.org/3/search/movie'
  try {
    const data: IPopularFilms = await axios.get(searchLink, {
      params: {
        api_key: API_KEY,
        include_adult: false,
        page: pageNumber,
        query
      }
    })
    return data
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    console.error(message)
  }
}

export const getSelectedMovie = async ({ id }: { id: string }): Promise<ISelectedFilm | undefined> => {
  try {
    const findFilmLink = `https://api.themoviedb.org/3/movie/${id}`
    const data: ISelectedFilm = await axios.get(findFilmLink, {
      params: {
        api_key: API_KEY,
        include_adult: false
      }
    })
    return data
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    console.error(
      message,
      '; You should pass object with "id" element as function parameter'
    )
  }
}

export const getCast = async ({ id }: { id: string }): Promise<ICast | undefined> => {
  try {
    const findFilmLink = `https://api.themoviedb.org/3/movie/${id}/credits`
    const data: ICast = await axios.get(findFilmLink, {
      params: {
        api_key: API_KEY,
        include_adult: false
      }
    })
    return data
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    console.error(
      message,
      '; You should pass object with "id" element as function parameter'
    )
  }
}

export const getReviews = async ({ id }: { id: string }): Promise<IReviews | undefined> => {
  try {
    const findFilmLink = `https://api.themoviedb.org/3/movie/${id}/reviews`
    const data: IReviews = await axios.get(findFilmLink, {
      params: {
        api_key: API_KEY,
        include_adult: false
      }
    })
    return data
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    console.error(
      message,
      '; You should pass object with "id" element as function parameter'
    )
  }
}
