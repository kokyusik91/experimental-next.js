import { useModal } from '@components/context/ModalContext'
import React, { useEffect } from 'react'

function Game() {
  const { openModal, closeModal, setModalInnerContent } = useModal()

  useEffect(() => {
    setModalInnerContent(
      <>
        <h1 className="text-black">모달 컨텐츠</h1>
        <p className="text-black" onClick={closeModal}>
          모달 내용
        </p>
      </>,
    )
  }, [])

  const handleOpenModal = () => {
    openModal()
  }

  return <button onClick={handleOpenModal}>Game</button>
}

export default Game
