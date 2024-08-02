import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './components/layout/Layout'
import Home from './pages/Home'

function App() {

  return (
   <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
