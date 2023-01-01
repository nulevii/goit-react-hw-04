import React, { KeyboardEventHandler, MouseEventHandler, useEffect } from 'react'
import style from '../styles.module.css'
function Modal ({ modalUrl, toggleModal }: { modalUrl: string, toggleModal: () => void }): JSX.Element {
  const onEscClose: (e: KeyboardEvent) => void = (e) => {
    if (e.key === 'Escape') {
      toggleModal()
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onEscClose)
    return () => { document.removeEventListener('keydown', onEscClose) }
  })
  const onToggleModal: MouseEventHandler<HTMLDivElement> = (e) => {
    const isDiv = Boolean((e.target as HTMLDivElement).dataset.modalWindow)
    if (isDiv) {
      toggleModal()
    }
  }
  return (
    <div onClick={(onToggleModal)} data-modal-window className={style.modalWindow}>
      <img className={style.modalIMG} src={modalUrl} alt="Big image" />
    </div>
  )
}

export default Modal
