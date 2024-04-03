import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


// shortcode rfce
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> }  />
        <Route path="/login" element={ <LoginPage /> }  />
        <Route path="/register" element={ <RegisterPage /> }  />
        <Route path="/tasks" element={<h1> Tasks </h1>}  />
        <Route path="/add-task" element={<h1> Add Task </h1>}  />
        <Route path="/task/:id" element={<h1> Update Taks </h1>}  />
        <Route path="/profile" element={<h1> Profile </h1>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
