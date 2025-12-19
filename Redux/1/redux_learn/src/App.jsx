import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
      <div>
        Currently count is {count}
      </div>
       <button onClick={()=> dispatch(increment())}>Increase by 1</button>
      <button onClick={()=> dispatch(decrement())}>Decrease by 1</button> 
    </>
  )
}

export default App
