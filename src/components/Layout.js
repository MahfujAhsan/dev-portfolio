import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light px-32 lg:px-16 sm:!px-8 py-16 dark:bg-dark sm:py-8 md:py-14 ${className}`}>
        {children}
    </div>
  )
}

export default Layout
