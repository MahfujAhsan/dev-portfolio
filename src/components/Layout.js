import React from 'react'

const Layout = ({children, className=""}) => {
  return (
<<<<<<< HEAD
    <div className={`w-full h-full inline-block z-0 bg-light px-32 lg:px-16 sm:!px-8 py-16 dark:bg-dark sm:py-8 md:py-14 ${className}`}>
=======
    <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark p-0 md:p-12 ${className}`}>
>>>>>>> d75dee75991b97c4439ae9333b32d442e9e39e73
        {children}
    </div>
  )
}

export default Layout
