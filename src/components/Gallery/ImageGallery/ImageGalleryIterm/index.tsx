import React from 'react'
import styles from '../styles.module.css'
function ImageGalleryIterm ({ webformatURL, largeImageURL, toggleModal }:
{ webformatURL: string, largeImageURL: string, toggleModal: (modalUrl: string) => void }): JSX.Element {
  const onToggleModal = (largeImageURL: string): () => void => () => {
    toggleModal(largeImageURL)
  }
  return (
    <li className={styles.galleryItem}>
      <img onClick={onToggleModal(largeImageURL)} className={styles.galleryImage} src={webformatURL} alt={'downloaded image'} />
    </li>
  )
}

export default ImageGalleryIterm
