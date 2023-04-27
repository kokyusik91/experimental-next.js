import React, { ReactNode, useEffect, useState } from 'react'
import Portal from './Portal'
import { useRouter } from 'next/router'

export type ModalProps = {
  open: boolean
  onClose?: () => void
  children?: ReactNode
}

function Modal({ open, children, onClose }: ModalProps) {
  useEffect(() => {
    if (open) {
      // Add event listener to prevent closing the modal when the back button is clicked
      const handlePopState = (event: PopStateEvent) => {
        onClose && onClose()
        // Restore the previous state to prevent the user from going back
        window.history.pushState(null, '')
        event.preventDefault()
      }
      window.history.pushState(null, '')
      window.addEventListener('popstate', handlePopState)

      return () => {
        window.removeEventListener('popstate', handlePopState)
        window.history.back()
      }
    }
  }, [open, onClose])

  return (
    <Portal>
      <div
        className={`w-40 bg-white fixed top-1/2 left-1/2 transition transform ease-in-out duration-1000 ${
          open ? `-translate-x-1/2 -translate-y-1/2` : `-translate-x-1/2 translate-y-96`
        }`}
      >
        {children}
      </div>
    </Portal>
  )
}

export default Modal
