import { Route, Routes } from 'react-router-dom'
import {  Navbar } from '../../components'
import { MainPage } from '..'
import { App } from '../../App'
export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/:id' element={<MainPage />}></Route>
      </Routes>
    </div>
  )
}
