import './App.css'

import { useState } from 'react';

import Counter from './Counter'
import Hello from './Hello'
import List from './List';
import Select from './Select';

function App() {
  const [name, setName] = useState('Toto')
  const [color, setColor] = useState('Red')
 
  function handleNameChange(value) {
    setName(value)
  }

  console.log('App');
  return (
    <>
      <Hello name={name} />
      <Counter />
      <List />


      <Select value={name} items={["Toto", 'Titi', 'Tata']} onValueChange={handleNameChange}  />
      <Select value={color} items={['Red', 'Green', 'Blue']}  onValueChange={setColor}    />
      <p>Selected color: {color}</p>
    </>
  )
}

export default App
