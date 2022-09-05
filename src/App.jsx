import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Template/Dashboard'
import DashboardElements from './components/DashboardElements'
import Users from './components/Users'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Dashboard />}>
          <Route index element={<DashboardElements />} />
          <Route path='/users' element={<Users />} />
        </Route>

        <Route path="login" element={<Login />} />

        {/* when no route matches*/}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem"}}>
              <h1 style={{ textAlign: "center" }}>There's nothing here!</h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App