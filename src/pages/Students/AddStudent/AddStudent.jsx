import React from 'react'
import StudentAddForm from '../../../components/StudentAddForm/StudentAddForm'

const AddStudent = () => {
  return (
    <div>
      <div className='text-center mb-10 w-3/4 md:w-1/2 mx-auto'>
        <div className='divider divider-success'>
          <h2 className='font-bold text-3xl'>Add Student</h2>
        </div>
      </div>
      <StudentAddForm />
    </div>
  )
}

export default AddStudent