import './App.css'

import Counter from './Counter'
import Hello from './Hello'
import List from './List';

function App() {
 
  console.log('App');
  return (
    <>
      <Hello name="Toto" />
      <Counter />
      <List />
    </>
  )
}

export default App
