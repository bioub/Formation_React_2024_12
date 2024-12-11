import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import { todosReducer } from './store/reducers.js'

const store = configureStore({
  reducer: { // 👈 appelle combineReducer
    todos: todosReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
