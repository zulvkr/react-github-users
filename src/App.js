import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import CardList from './components/CardList'

function App () {
  const [cards, setCards] = useState([])
  const addNewCard = card => {
    setCards([...cards, card])
  }
  return (
    <div>
      <h1 className='pt-10 mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900'>
        Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App
