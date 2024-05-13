
import React from 'react'
import { useParams } from 'react-router-dom';

function EditEmployee() {
    const {id} = useParams()
  return (
    <div>
      EditEmployee
    </div>
  )
}

export default EditEmployee;
