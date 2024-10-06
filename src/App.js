import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {MainPage, AboutPage, ContactsPage, EntrancePage, MatchesPage, NewsPage, ShopPage, TeamPage} from './pages'
import MainLayout from './layouts/MainLayout'

import './App.css'
import './css/reset.css'
import './css/fonts.css'
import './css/globals.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<MainLayout/>}>
            <Route path='' element={<MainPage/>}/>
            <Route path='news' element={<NewsPage/>}/>
            <Route path='team' element={<TeamPage/>}/>
            <Route path='matches' element={<MatchesPage/>}/>
            <Route path='shop' element={<ShopPage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='contacts' element={<ContactsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
