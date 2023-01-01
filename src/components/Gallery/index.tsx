import React, { ChangeEvent, useEffect, useState } from 'react'
import getData, { IHit } from '../../utilities/getData'

import SearchForm from './SearchForm'
import ImageGallery from './ImageGallery'
import Button from './Button'
import Loader from './Loader'
import Modal from './Modal'

function Gallery (): JSX.Element {
  const [page, setPage] = useState(1)
  const perPage = 12
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [hits, setHits] = useState<IHit[]>([])
  const [total, setTotal] = useState(0)
  const [totalHits, setTotalHits] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalURL, setModalURL] = useState('')

  const updateQ = (qValue: string): void => {
    setQ(qValue)
  }

  useEffect(() => {
    if (q === '') return
    void updateState()
  }, [q])
  useEffect(() => {
    if (page === 1) return
    void loadMore()
  }
  , [page])

  const updateState = async (): Promise<void> => {
    setLoading(true)
    const data = await getData({ per_page: perPage, page: 1, q })
      .catch((error) => setErrorMessage(error.message))
    if (data !== undefined) {
      setHits(data?.hits)
      setTotal(data?.total)
      setTotalHits(data?.totalHits)
      setLoading(false)
    }
  }

  const loadMore = async (): Promise<void> => {
    setLoading(true)
    const data = await getData({ per_page: perPage, page, q })
      .catch((error) => setErrorMessage(error.message))
    if (data !== undefined) {
      setHits([...hits, ...data?.hits])
      setTotal(data?.total)
      setTotalHits(data?.totalHits)
      setLoading(false)
    }
  }

  const toggleModal = (modalUrl = ''): void => {
    setModalURL(modalUrl)
    setIsModalOpen(!isModalOpen)
  }

  const changePage = (): void => {
    setPage(page + 1)
  }

  const pages = Math.ceil(totalHits / perPage)
  return <>
      {loading && <Loader />}
      <SearchForm updateQ={updateQ} q={q} updateState={updateState} />
      <ImageGallery hits={hits} toggleModal={toggleModal}/>
      {(hits.length > 0) && (pages > page) && <Button changePage={changePage}/>}
      {(isModalOpen) && <Modal modalUrl={modalURL} toggleModal={toggleModal} />}

    </>
}

export default Gallery
