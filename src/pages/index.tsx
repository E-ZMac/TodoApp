import type { NextPage } from 'next'
import React from 'react'
import { Todo } from '../components/Todo'
import 'react-toastify/dist/ReactToastify.css';



const Home: NextPage = () => {

  return (
    <>
      <main>
        <Todo />
      </main>
    </>
  )
}

export default Home
