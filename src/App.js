import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Landing, Error, Register, ProtecedRoute } from './pages'
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard'
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtecedRoute>
              <SharedLayout />
            </ProtecedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-right' />
    </Router>
  )
}

export default App
