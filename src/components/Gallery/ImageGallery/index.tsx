import React from 'react'
import { IHit } from '../../../utilities/getData'
import ImageGalleryIterm from './ImageGalleryIterm'
import styles from './styles.module.css'
function ImageGallery ({ hits, toggleModal }:
{ hits: IHit[] | null, toggleModal: (modalUrl: string) => void }): JSX.Element {
  return (
    <ul className={styles.gallery}>
      {hits?.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryIterm toggleModal={toggleModal} key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
      })}
    </ul>
  )
}

export default ImageGallery
