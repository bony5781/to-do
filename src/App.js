import React, { Fragment } from 'react'
import Todolist from './components/Todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Fragment>
      <Todolist />
      <footer>
        Made by Abhinav Bhowmik
      </footer>
    </Fragment>
  )
}

export default App