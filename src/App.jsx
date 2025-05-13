
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Layout/Layout'
import Login from './Pages/Login/Login'
import Signin from './Pages/Signin/Signin'
import Sidebars from './components/Sidebars/Sidebars'

function App() {


  return (
    <>
<div className=''>
      <BrowserRouter basename="/"  >
    <Routes>
      <Route
          path={`/dashboard/*`}
          element={<Layout />}
        />
      <Route
          path={`/login`}
          element={<Login></Login>}
        />
      <Route
          path={`/signin`}
          element={<Signin></Signin>}
        />
      <Route
          path={`/sidebars`}
          element={<Sidebars></Sidebars>}
        />
      
    </Routes>
    
    </BrowserRouter>
</div>
    </>
  )
}

export default App
