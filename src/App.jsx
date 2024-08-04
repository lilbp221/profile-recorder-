import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './components/layout/Layout'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
   <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
