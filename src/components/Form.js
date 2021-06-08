const Form = props => {
  return (
    <form className='w-full max-w-sm mx-auto'>
      <div className='flex mt-10'>
        <input
          type='text' placeholder='Github username'
          className='block w-full px-3 py-2 transition duration-150 border rounded-md shadow-sm form-input border-gray:300 focus:outline focus:shadow-outline-blue focus:border-blue-300'
          required
        />
        <button
          type='submit'
          className='px-3 py-2 ml-2 font-medium text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md text-smleading-4 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
