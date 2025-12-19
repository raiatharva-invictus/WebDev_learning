import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)

  const { register, handleSubmit, watch, setError ,formState: { errors, isSubmitting } } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(4)
    // if(data.username !== "harry"){
      //   setError("myform", {message: "your form is not in good order because your username is invalid"})
      // }
      // else console.log(data)


      let r = await fetch("http://localhost:3000/", {method: 'POST',headers:{"Content-Type": "application/json"} ,body:JSON.stringify(data)})
      let res = r.text()
      console.log(data,res)

    };

  return (
    <>
      {isSubmitting && <div>Loading.....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is not met" }, maxLength: { value: 8, message: "Max length is not met" } })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          {/* {errors.username && <div className='red'>Their is some errors in username</div>} */}
          <br />
          <input placeholder='password' {...register("password", {minLength: { value: 7, message: "Min length is not met" }})} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <br/>
          <input disabled={isSubmitting} type="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
