import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'
import Modal, { ModalProps } from '@components/components/Modal'

type ModalContextProps = {
  openModal: (modalComponent?: ReactNode) => void
  closeModal: () => void
  setModalInnerContent: Dispatch<SetStateAction<ReactNode | null>>
}

// 컨텍스트의 초기 값을 지정해줌.
export const ModalContext = createContext<ModalContextProps>({
  openModal: (modalComponent?: ReactNode) => {},
  closeModal: () => {},
  setModalInnerContent: () => {},
})

type ModalProviderProps = {
  children: ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalInnerContent, setModalInnerContent] = useState<ReactNode | null>(null)

  console.log('modalInnerContent', modalInnerContent)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = (modalContent: ReactNode) => {
    // setModalInnerContent(modalContent)
    setIsOpen(true)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, setModalInnerContent }}>
      {children}
      <Modal open={isOpen} onClose={closeModal}>
        {modalInnerContent}
      </Modal>
    </ModalContext.Provider>
  )
}

function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useSnackBarContext must be in SnackBarProvider')
  }
  return context
}

export { ModalProvider, useModal }
