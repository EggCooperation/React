import React, { createContext, useContext, useEffect, useState } from 'react'

// Styles
import Styles from './MessageContext.css'

const defaultToast = {
  message: null,
  delay: 3,
  type: 'success',
}

const Context = createContext()
Context.displayName = 'MessageContext'

// Hook
export const useMessageContext = () => useContext(Context)

// HOC
export const MessageProvider = (props) => {
  const { children } = props
  const [toast, setToast] = useState(defaultToast)

  useEffect(() => {
    let timeOut = setTimeout(() => setToast(defaultToast), toast.delay * 1000)
    return () => {
      clearTimeout(timeOut)
    }
  }, [toast])

  const showToast = ({
    message,
    type = 'success',
    delay = 3,
    redirect = undefined
  }) => {
    if (typeof message !== 'string') message = String(message)
    setToast({
      message,
      delay,
      type,
    })
    redirect && props.history.push(redirect)
  }

  return (
    <Context.Provider value={{ showToast }}>
      {children}
      {toast.message && (
        <div
          className={`${Styles.toastNotification} ${Styles[toast.type]}`}
          onClick={() => setToast(defaultToast)}
          aria-hidden="true"
        >
          {toast.message}
        </div>
      )}
    </Context.Provider>
  )
}


