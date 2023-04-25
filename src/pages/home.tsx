import Modal from '@components/components/Modal'
import React, { useState } from 'react'

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleConfirm = () => {
    const status = confirm('정말 닫으시겠어요?')
    if (status) {
      handleCloseModal()
    } else return
  }

  return (
    <div className="w-full h-screen bg-sky-500">
      <button onClick={handleOpenModal} className="bg-red-300">
        모달 오픈
      </button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <h1 className="text-black text-lg text-center mb-4 font-bold">드디어 해결</h1>
        <div className="flex justify-center">
          <h1 className="text-red-300 text-center mr-3" onClick={handleCloseModal}>
            닫기
          </h1>
          <h1 className="text-sky-300 text-center" onClick={handleConfirm}>
            확인
          </h1>
        </div>
      </Modal>
    </div>
  )
}

export default Home
