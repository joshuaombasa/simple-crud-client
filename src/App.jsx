import { useState } from 'react'

import './App.css'
import { Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SingleTodo from './pages/SingleTodo'
import Todos from './pages/Todos'
import AddNewTodo from './pages/AddNewTodo'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='todos' element={<Todos/>}/>
      <Route path='todos/:id' element={<SingleTodo/>}/>
      <Route path='addTodo' element={<AddNewTodo/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
