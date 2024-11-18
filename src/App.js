import './App.css';
import Cards from './Components/Cards';
import Score from './Components/Score';

import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0)
  return (
    <>
    <div className="main">
     <Cards  score = { score } setScore= { setScore } />
    </div>
    <Score score = {score } />
   </>
  );
}

export default App;
