import React, { ReactNode, useEffect, useState } from 'react'
import ReactDOM, { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
}

function Portal({ children }: PortalProps) {
  const [element, setElement] = useState<HTMLElement | null>(null)

  console.log(element)

  useEffect(() => {
    setElement(document.getElementById('portal'))
  }, [])

  if (!element) {
    return <></>
  }

  return ReactDOM.createPortal(children, element)
}

export default Portal
