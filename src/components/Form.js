import axios from 'axios'
import { useState } from 'react'

const Form = props => {
  const [username, setUsername] = useState('')
  const handleSubmit = (event) => {
    axios.get(`https://api.github.com/users/${username}`).then(res => {
      props.onSubmit(res.data)
      setUsername('')
    })
    event.preventDefault()
  }

  return (
    <form className='w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
      <div className='flex mt-10'>
        <input
          type='text' placeholder='Github username'
          className='block w-full px-3 py-2 transition duration-150 border border-gray-300 rounded-md shadow-sm form focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300'
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          type='submit'
          className='px-3 py-2 ml-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300 active:bg-gray-50 active:text-gray-800'
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
