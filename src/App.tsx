//import { useState } from 'react'
import './App.css'
import ConferencesPage from './pages/contacts/ContactsPage'
import MainPage from './pages/main/MainPage'
import ReleasesPage from './pages/releases/ReleasesPage'
import { Routes, Route, Link } from "react-router-dom"
import ServicesPage from './pages/services/ServicesPage'
import AuthorsPage from './pages/authors/AuthorsPage'
import AboutPage from './pages/about/AboutPage'

function App() {

  return (
    <>
      <div className='wrapper'>
        <nav className="navbar background">
          <ul className="nav-list">
            <li><Link to="/" className='logo'>СОЦИОЛОГИЯ И ПРАВО</Link></li>
            <li><Link to="/releases" className='navigation'><p>ПУБЛИКАЦИИ</p></Link></li>
            <li><Link to="/services" className='navigation'><p>УСЛУГИ</p></Link></li>
            <li><Link to="/authors" className='navigation'><p>АВТОРАМ</p></Link></li>
            <li><Link to="/about" className='navigation'><p>О ЖУРНАЛЕ</p></Link></li>
            <li><Link to="/conferences" className='navigation'><p>КОНТАКТЫ</p></Link></li>
          </ul>
        </nav>

        <div className="main">
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/releases' element={<ReleasesPage />}></Route>
            <Route path='/conferences' element={<ConferencesPage />}></Route>
            <Route path='/services' element={<ServicesPage />}></Route>
            <Route path='/authors' element={<AuthorsPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </div>

        <footer className="footer">
          <div className='footer-par'>
            <p className="text-footer">Официальный сайт журнала "Социология и Право". Все права защищены.</p>
            <p className="text-footer">При использовании опубликованных материалов ссылка на журнал "Социология и Право" обязательна - 2023</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
