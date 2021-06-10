const Card = (props) => {
  return (
    <div className='flex flex-wrap items-center justify-between px-4 py-5 pb-8 -mt-4 -ml-4 border-b border-gray-200 sm:px-6 sm:flex-no-wrap'>
      <div className='mt-4 ml-4'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <img
              className='w-12 h-12 rounded-full'
              src={props.avatar_url}
              alt=''
            />
          </div>
          <div className='ml-4'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              {props.name}
              <span className='pl-2 text-sm leading-5 text-gray-500'>
                @{props.login}
              </span>
            </h3>
            <p className='text-sm leading-5 text-gray-500'>
              {props.public_repos} repositories. User since{' '}
              {props.created_at.slice(0, 4)}
            </p>
            <p className='text-sm leading-5 text-gray-500'>
              {props.location || ''}
            </p>
            <p className='mt-1 text-sm leading-5 text-gray-500'>{props.bio}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-shrink-0 mt-4 ml-4'>
        <span className='inline-flex ml-3 rounded-md shadow-sm'>
          <a href={props.html_url}>
            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 mr-2 text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:ring-blue-400 focus:ring-2 focus:border-blue-300 active:bg-gray-50 active:text-gray-800'
            >
              <span>Profile</span>
            </button>
          </a>
          <a href={props.blog}>
            <button
              type='button'
              className='relative inline-flex items-center px-4 py-2 mr-2 text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:ring-blue-400 focus:ring-2 focus:border-blue-300 active:bg-gray-50 active:text-gray-800'
            >
              <span>Website</span>
            </button>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Card
