import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Atharva")
  const [form, setform] = useState({email: "", phone : ""})

  const handleClick = ()=>[
    alert('Hello this was clicked')
  ]
  const handleMouseOver = ()=>{
    alert('Mouse over noticed')
  }
  // const handleChange = (e)=>{
  //  setname(e.target.value)
  // }
  const handleChange = (e)=>{
   setform({...form, [e.target.name]: e.target.value})
   console.log(form)
  }

  return (
    <>
    <div className="btn">
    <button onClick={handleClick}>Change me </button>
    </div>
    {/* <div className="red" onMouseOver={handleMouseOver}>I am a div</div>
    <input type="text" value={name} onChange={handleChange}/> */}


    {/* <input type="text" name="email" value={form.email} onChange={handleChange}/>
    <input type="text" name="phone" value={form.phone} onChange={handleChange}/> */}

    {/* if form is an empty object that us in use state of form we have {} empty declared in form then we do it below way*/}
    <input type="text" name="email" value={form.email?form.email: ""} onChange={handleChange}/>
    <input type="text" name="phone" value={form.phone?form.phone : ""} onChange={handleChange}/>

    </>
  )
}

export default App
