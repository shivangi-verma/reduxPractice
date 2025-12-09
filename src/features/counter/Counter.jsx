import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

function Counter() {
    const selectCounter = useSelector((state)=>{state.counter.value})
    const dispatch = useDispatch()

  return (
     <>
     <div className='flex flex-row bg-gray-800'>

     </div>
     </>
  )
}

export default Counter