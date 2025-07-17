import React from 'react'

const SearchStudent = () => {
  return (
    <div>
      <div className='text-center w-3/4 md:w-1/2 mx-auto'>
        <div className='divider divider-success'>
          <h2 className='font-bold text-3xl'>Search Student</h2>
        </div>
      </div>
      <div className='flex justify-center items-center mt-10 bg-base-300 p-4 h-24 rounded-box'>
        <label className="input input-success">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
    </div>
  )
}

export default SearchStudent