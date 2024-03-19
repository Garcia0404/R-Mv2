import { Navigate, Route, Routes } from 'react-router-dom'
import {  Navbar } from '../../components'
import { MainPage } from '..'
export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<Navigate to='/1'/>}></Route>
        <Route path='/:id' element={<MainPage />}></Route>
      </Routes>
    </div>
  )
}
