import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Men from './Components/pages/Men';
import Women from './Components/pages/Women';
import Kids from './Components/pages/Kids';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<M />} /> */}
          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
          <Route path="Kids" element={<Kids />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)
