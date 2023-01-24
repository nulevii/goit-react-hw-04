import React from 'react'
// import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import MovieDetails from './pages/MovieDetails'
import SearchPage from './pages/SearchPage'
import Cast from './pages/Cast'
import Reviews from './pages/Reviews'
function App (): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
