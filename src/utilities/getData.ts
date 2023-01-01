import axios, { AxiosResponse } from 'axios'

export interface DataParamsInterface {
  per_page: number
  page: number
  q: string
}
export interface IHit {
  id: number
  pageURL: string
  type: string
  tags: string
  previewURL: string
  previewWidth: number
  previewHeight: number
  webformatURL: string
  webformatWidth: number
  webformatHeight: number
  largeImageURL: string
  imageWidth: number
  imageHeight: number
  imageSize: number
  views: number
  downloads: number
  collections: number
  likes: number
  comments: number
  user_id: number
  user: string
  userImageURL: string
}

export interface IData {
  total: number
  totalHits: number
  hits: IHit[]
}
const getData = async <T>(params: DataParamsInterface): Promise<IData | undefined > => {
  const url = 'https://pixabay.com/api/'
  const key = '27364037-494c2c1537a13aa746fb2bd48'
  const imageType = 'photo'
  const orientation = 'horizontal'
  const safesearch = true
  try {
    const data = await axios.get(url, {
      params: { key, image_type: imageType, orientation, safesearch, ...params }
    })
    return data.data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
export default getData
