import React, { useEffect } from 'react';
import './App.css';
import { Routes } from './pages/Routes';
import { productsPrefetch } from './api';

function App() {
  useEffect(() => {
    // Prefetch data
    productsPrefetch();
  }, [])
  
  return (
    <Routes />
  );
}

export default App;
