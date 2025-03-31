import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

export const CalendarApp = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
