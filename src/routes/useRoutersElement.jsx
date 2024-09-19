import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../views/Home'
const useRoutersElement = () => {
  const router = useRoutes([
    {
      path: '/',
      element: <Home />
    }
  ])
  return router
}

export default useRoutersElement