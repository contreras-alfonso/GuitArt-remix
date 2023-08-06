import React from 'react'

const Spinner = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center inset-0 bg-black bg-opacity-90 fixed right-0 left-0 top-0'>
        <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
        </div>
    </div>
  )
}

export default Spinner