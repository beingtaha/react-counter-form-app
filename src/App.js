import { useState } from 'react';
import Counter from './Counter';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <header>
        <h1>React Counter & Form App</h1>
        <p>Demonstrating useState and Form Handling</p>
      </header>
      
      <main>
        <Counter 
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
        
        <ContactForm />
      </main>
      
      <footer>
        <p>React Assignment - Counter & Form Handling</p>
      </footer>
    </div>
  );
}

export default App;