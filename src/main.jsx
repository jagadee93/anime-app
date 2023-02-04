import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./sass/styles.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchListProvider from "./components/contextApi/contextProvider";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <WatchListProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </WatchListProvider>
  </Router>
)
