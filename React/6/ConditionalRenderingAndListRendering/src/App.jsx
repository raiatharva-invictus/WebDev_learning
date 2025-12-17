import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(0)
  const [todos, settodos] = useState([
    {
      title : "This is first todo",
      desc : "This is desc of first todo"
    },
    {
      title : "This is second todo",
      desc : "This is desc of second todo"
    },
    {
      title : "This is third todo",
      desc : "This is desc of third todo"
    }
  ])

  // we can also create a component here too(tiny one else our code will get long in that case we can keep it like before in components folder)
  const Todo = ({todo})=>{
    return (
      <>
      <div className='todo'>{todo.title}</div>
      <div className='todo'>{todo.desc}</div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn?<button>showBtn is true</button>:<button>showBtn is false</button>}
      {showBtn && <button>showBtn is true</button>} */}
      {/* <Todo/> */}
      {todos.map(todo=>{
        // return <Todo key={todo.title} todo={todo}/> // this is one way below is other way that is ideally used to produce this result
        return <div className="m-4 border border-2 border-purple-600" key={todo.title}>
      <div className='todo'>{todo.title}</div>
      <div className='todo'>{todo.desc}</div>
      </div>
      })}
      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          Toggle showBtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
